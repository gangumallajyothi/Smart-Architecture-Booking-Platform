import os
import glob
import re

def patch_files(dir_path):
    files = glob.glob(os.path.join(dir_path, '**', '*.jsx'), recursive=True)
    count = 0
    for file_path in files:
        if 'FirstPage' in file_path or 'LoginPage' in file_path or 'AdminDashboard' in file_path:
            continue
            
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        orig_content = content
        
        # 1. Force 1-column stack on mobile by adding a media query to the grid container
        # We'll look for grid-template-columns and add a wrapper or modify it.
        # But safest is to inject a <style> block if not present, or add to existing one.
        
        mobile_style = """
        @media (max-width: 600px) {
          .card-container {
            grid-template-columns: 1fr !important;
            padding: 15px !important;
            gap: 20px !important;
          }
          .card {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        """
        
        if '<style>' in content:
            if '@media (max-width: 600px)' not in content:
                content = content.replace('</style>', mobile_style + '\n        </style>')
        else:
            # If no style tag, we might have to add one before the return
            style_block = f"<style>{{`{mobile_style}`}}</style>"
            if 'return (' in content:
                content = content.replace('return (', f'return (\n    {style_block}')
        
        # 2. Cleanup huge paddings that cause horizontal overflow
        content = re.sub(r'padding:\s*30px\s+50px\s+80px\s*;', r'padding: 20px 10px 80px;', content)
        content = re.sub(r'padding:\s*40px\s*;', r'padding: 20px 10px;', content)
        
        # 3. Ensure cards are responsive
        content = re.sub(r'width:\s*320px\s*;', r'width: 100%; max-width: 320px;', content)
        
        if content != orig_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1
            print(f"Patched: {file_path}")
            
    print(f"Patched {count} files")

if __name__ == "__main__":
    patch_files(r'c:\Smart Architecture Booking Platform\frontend\client\src\pages')
