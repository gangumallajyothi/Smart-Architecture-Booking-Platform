import os
import glob
import re

def patch_files(dir_path):
    files = glob.glob(os.path.join(dir_path, '**', '*.jsx'), recursive=True)
    count = 0
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        orig_content = content
        
        # 1. Update .card-container padding - change large side paddings to small percentages/pixels for mobile
        content = re.sub(r'padding:\s*30px\s+50px\s+80px\s*;', r'padding: 20px 10px 80px;', content)
        content = re.sub(r'padding:\s*40px\s*;', r'padding: 20px 10px;', content)
        
        # 2. Ensure cards don't have super large fixed widths that overflow
        content = re.sub(r'width:\s*320px\s*;', r'width: 100%; max-width: 320px;', content)
        
        # 3. Fix min-width in repeat(auto-fit, minmax(280px, 1fr)) to be 240px for smaller phones
        content = content.replace('minmax(280px, 1fr)', 'minmax(240px, 1fr)')

        # 4. Global white space fix for individual layouts
        if '.top' in content and 'flex-wrap' not in content:
            content = content.replace('.top { display:flex; gap:30px; }', '.top { display:flex; gap:30px; flex-wrap: wrap; }')

        if content != orig_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1
            print(f"Patched: {file_path}")
            
    print(f"Patched {count} files")

if __name__ == "__main__":
    patch_files(r'c:\Smart Architecture Booking Platform\frontend\client\src\pages')
