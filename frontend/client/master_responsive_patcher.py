import os
import glob
import re

# Pages already fixed manually
SKIP = ['Homepage.jsx', 'Housepage.jsx', 'FirstPage.jsx', 'LoginPage.jsx', 'AdminDashboard.jsx']

def patch_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    orig = content

    # Fix 1: Replace old grid-template-columns with safer minmax
    content = re.sub(
        r'grid-template-columns\s*:\s*repeat\(auto-fit,\s*minmax\(\d+px,\s*1fr\)\)',
        'grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))',
        content
    )

    # Fix 2: Replace large fixed horizontal padding on .card-container
    content = re.sub(
        r'(\.card-container\s*\{[^}]*?)padding\s*:\s*\d+px\s+\d+px\s+\d+px(\s*;[^}]*?\})',
        lambda m: m.group(0).replace(m.group(0), 
            re.sub(r'padding\s*:\s*\d+px\s+\d+px\s+\d+px', 'padding: 20px 15px 80px', m.group(0))),
        content
    )

    # Fix 3: Add max-width + box-sizing to card-container if not present
    if '.card-container' in content and 'max-width: 1200px' not in content:
        content = re.sub(
            r'(\.card-container\s*\{)',
            r'\1\n          max-width: 1200px;\n          margin: 0 auto;\n          width: 100%;\n          box-sizing: border-box;',
            content
        )

    # Fix 4: Replace fixed card widths with fluid widths
    content = re.sub(r'max-width\s*:\s*350px\s*;', 'max-width: 100%;', content)
    content = re.sub(r'max-width\s*:\s*320px\s*;', 'max-width: 100%;', content)

    # Fix 5: Add box-sizing to .card if not present
    if '.card {' in content and 'box-sizing: border-box' not in content:
        content = content.replace(
            'overflow: hidden;\n        }',
            'overflow: hidden;\n          box-sizing: border-box;\n        }'
        )

    # Fix 6: Upgrade existing media query to 600px threshold
    content = re.sub(
        r'@media\s*\(max-width\s*:\s*768px\s*\)\s*\{[^}]*?\.card-container[^}]*?\}',
        '''@media (max-width: 600px) {
          .card-container {
            grid-template-columns: 1fr !important;
            padding: 15px 12px 80px !important;
            gap: 20px !important;
          }
          .card {
            max-width: 100% !important;
          }
          h1 {
            font-size: 22px !important;
            margin-top: 70px;
          }
        }''',
        content,
        flags=re.DOTALL
    )

    if content != orig:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False


if __name__ == '__main__':
    base = r'c:\Smart Architecture Booking Platform\frontend\client\src\pages'
    files = glob.glob(os.path.join(base, '**', '*.jsx'), recursive=True)
    patched = 0
    for fp in files:
        name = os.path.basename(fp)
        if name in SKIP:
            continue
        if patch_file(fp):
            print(f'Patched: {fp}')
            patched += 1
    print(f'\nTotal patched: {patched} files')
