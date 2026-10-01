import os

dir_path = r'c:\Users\Udham Singh\Downloads\Astrology\my-astrology\components'

replacements = [
    ('bg-pink-50', 'bg-transparent'),
    ('bg-slate-50', 'bg-transparent'),
    ('bg-white', 'bg-black/50'),
    ('bg-white/70', 'bg-black/50'),
    ('bg-pink-200/50', 'bg-green-900/10'),
    ('bg-[#fdfdfd]', 'bg-transparent'),
    ('bg-[#eefae8]', 'bg-transparent'),
    ('from-pink-100/40 via-pink-50 to-pink-50', 'from-black/40 via-black to-black'),
    ('bg-pink-100', 'bg-black'),
    ('bg-pink-50/80', 'bg-black/80'),
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
                print(f'Updated {file}')
