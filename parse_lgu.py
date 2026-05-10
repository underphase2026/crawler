import re
import json
import os

with open("read.txt", "r", encoding="utf-8") as f:
    text = f.read()

blocks = text.split("=======================================")

def create_payload(service_name, product_code, html_str, category="통화/문자메시지"):
    # Remove FAQ section
    faq_pattern = re.compile(r'<div class="c-accordion-group"><div variant="primary" class="c-accordion-header collapsed" role="button" tabindex="0" aria-expanded="false" aria-controls="[^"]*" style="overflow-anchor: none;"><div class="row" style="width: 100%;"><div class="col"><strong>자주\s*하는\s*질문</strong></div>.*?</div></div></div></div>', re.DOTALL)
    html_no_faq = re.sub(faq_pattern, '', html_str)
    
    # Also handle another possible FAQ pattern if spacing differs
    faq_pattern2 = re.compile(r'<div class="c-accordion-group"><div variant="primary" class="c-accordion-header collapsed" role="button" tabindex="0" aria-expanded="false" aria-controls="[^"]*" style="overflow-anchor: none;"><div class="row" style="width: 100%;"><div class="col"><strong>자주\s*하는질문</strong></div>.*?</div></div></div></div>', re.DOTALL)
    html_no_faq = re.sub(faq_pattern2, '', html_no_faq)
    
    # Also handle "자주하는 질문"
    faq_pattern3 = re.compile(r'<div class="c-accordion-group"><div variant="primary" class="c-accordion-header (collapsed|not-collapsed)" role="button" tabindex="0" aria-expanded="(false|true)" aria-controls="[^"]*" style="overflow-anchor: none;"><div class="row" style="width: 100%;"><div class="col"><strong>자주\s*하는\s*질문</strong></div>.*?</div></div></div></div>', re.DOTALL)
    html_no_faq = re.sub(faq_pattern3, '', html_no_faq)
    
    # Generic FAQ removal
    generic_faq = re.compile(r'<div class="c-accordion-group"(?!.*<div class="c-accordion-group").*?<strong>자주\s*하는\s*질문</strong>.*?</div></div></div></div>', re.DOTALL)
    html_no_faq = re.sub(generic_faq, '', html_no_faq)

    # Let's do a simpler generic removal for FAQ
    # Find <div class="col"><strong>자주 하는 질문</strong></div> and its wrapping <div class="c-accordion-group">
    # Actually, we can just find <div class="c-accordion-group"> that contains it and remove up to </div></div></div></div>
    for possible_spelling in ["자주 하는 질문", "자주하는질문", "자주하는 질문", "자주 하는질문"]:
        while True:
            idx = html_no_faq.find(f"<strong>{possible_spelling}</strong>")
            if idx == -1:
                break
            # Find the starting <div class="c-accordion-group"> before this
            start_idx = html_no_faq.rfind('<div class="c-accordion-group">', 0, idx)
            if start_idx == -1:
                break
            # Find the end of this block
            # The block is usually closed by 4 divs: </div></div></div></div>
            # Let's count divs from start_idx to find the end
            div_count = 0
            pos = start_idx
            end_idx = -1
            while pos < len(html_no_faq):
                next_open = html_no_faq.find('<div', pos)
                next_close = html_no_faq.find('</div', pos)
                
                if next_close == -1:
                    break
                    
                if next_open != -1 and next_open < next_close:
                    div_count += 1
                    pos = next_open + 4
                else:
                    div_count -= 1
                    pos = next_close + 6
                
                if div_count == 0:
                    end_idx = pos
                    break
            
            if end_idx != -1:
                html_no_faq = html_no_faq[:start_idx] + html_no_faq[end_idx:]
            else:
                break


    js_content = f"""const payload = {{
  productCode: "{product_code}",
  productName: "{service_name}",
  carrier: "LGU",
  category: "{category}",
  rawHtml: `
{html_no_faq.strip()}
`
}};

async function sendRequest() {{
  const response = await fetch("http://localhost:3000/api/parse", {{
    method: "POST",
    headers: {{ "Content-Type": "application/json" }},
    body: JSON.stringify(payload),
  }});
  const result = await response.json();
  console.log("Response:", JSON.stringify(result, null, 2));
}}

sendRequest();
"""
    safe_name = service_name.replace(" ", "_").replace("/", "_").replace("(", "_").replace(")", "_")
    output_path = f"payloads/LGU/통화_문자메시지/payload_{safe_name}.js"
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Created {output_path}")

for block in blocks:
    if not block.strip():
        continue
    
    # Check if this block has "이 파일은" marker
    match = re.search(r'"이 파일은 LGU의 "[^"]+" 카테고리인 "([^"]+)"상품이야, 파싱해줘"', block)
    if match:
        service_name = match.group(1)
        # Extract HTML start by finding the first <div string after the marker
        html_start = block.find('<div')
        if html_start != -1:
            html_str = block[html_start:]
        else:
            html_str = block
            
        # Determine productCode based on service_name
        code_map = {
            "발신번호표시제한": "Z2025_CALL_ID_RESTRICT",
            "국제전화수신차단": "Z2025_INTL_CALL_BLOCK"
        }
        product_code = code_map.get(service_name, f"Z2025_AUTO_{service_name}")
        create_payload(service_name, product_code, html_str)
