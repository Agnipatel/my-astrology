import os

dir_path = r'c:\Users\Udham Singh\Downloads\Astrology\my-astrology\components'

replacements = [
    ('text-slate-900', 'text-white'),
    ('text-slate-800', 'text-white'),
    ('text-slate-700', 'text-slate-200'),
    ('text-slate-600', 'text-slate-300'),
    ('text-slate-500', 'text-slate-400'),
]

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.tsx') and file != 'button.tsx':
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for old, new in replacements:
                new_content = new_content.replace(old, new)
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Updated text colors in {file}')
