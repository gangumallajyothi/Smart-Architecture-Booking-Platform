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
        
        # Replace fixed widths in .card explicitly
        content = re.sub(r'\.card\s*\{([^\}]*)width:\s*(\d+)px;([^\}]*)\}', 
                         r'.card {\1width: 100%; max-width: \2px;\3}', content)
        
        # Make card height auto so it doesn't overlap text when resizing
        content = re.sub(r'\.card\s*\{([^\}]*)height:\s*(\d+)px;([^\}]*)\}', 
                         r'.card {\1height: auto; min-height: \2px;\3}', content)
        
        # Replace inline styles with hardcoded heights on images to be responsive
        content = re.sub(r'width:\s*"100%",\s*height:\s*"400px",\s*objectFit:\s*"cover"', r'width: "100%", height: "auto", maxHeight: "60vh", objectFit: "contain"', content)
        content = re.sub(r'width:\s*"100%",\s*height:\s*"50vh",\s*objectFit:\s*"contain"', r'width: "100%", height: "auto", maxHeight: "50vh", objectFit: "contain"', content)

        if content != orig_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1
            print(f"Patched: {file_path}")
            
    print(f"Patched {count} files")

if __name__ == "__main__":
    patch_files(r'c:\Smart Architecture Booking Platform\frontend\client\src\pages')
