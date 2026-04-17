import os
import re
import glob

def patch_files(directory):
    files = glob.glob(os.path.join(directory, '**', '*.jsx'), recursive=True)
    count = 0
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        orig_content = content
        
        # 1. Update grid-template-columns in <style>
        content = re.sub(
            r'grid-template-columns:\s*repeat\(\s*\d+\s*,\s*[^)]+\);',
            r'grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));',
            content
        )
        
        # 2. Update fixed widths for architecture layouts in <style> (e.g. .floor img width)
        content = re.sub(
            r'width:\s*600px;',
            r'width: 100%; max-width: 600px; height: auto;',
            content
        )
        
        # 3. Update .left and .right styling to be flexible
        content = content.replace("flex:1;", "flex:1; min-width: 300px;")
        
        # 4. Make .top wrap
        content = content.replace(
            ".top { display:flex; gap:30px; }", 
            ".top { display:flex; gap:30px; flex-wrap: wrap; }"
        )
        content = content.replace(
            ".top { display:flex; gap:20px; }", 
            ".top { display:flex; gap:20px; flex-wrap: wrap; }"
        )
        
        # 5. Fix checkbox sections to wrap nicely if the screen is narrow
        content = content.replace(
            "justify-content:space-between; align-items:center;",
            "justify-content:space-between; align-items:center; flex-wrap: wrap; gap: 15px;"
        )
        
        # 6. Fix Inline Styles (like IndependentHouseForm.jsx)
        content = content.replace('flex: 1,', 'flex: 1, minWidth: "300px",')

        if content != orig_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1
            print(f"Patched: {file_path}")

    print(f"Total files patched: {count}")

if __name__ == "__main__":
    target_dir = r"c:\Smart Architecture Booking Platform\frontend\client\src\pages"
    patch_files(target_dir)
