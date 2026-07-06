import urllib.request
import os

logos = {
    'aetna.svg': 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Aetna_logo.svg',
    'metlife.svg': 'https://upload.wikimedia.org/wikipedia/commons/6/60/MetLife_logo.svg',
    'cigna.svg': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cigna_logo.svg',
    'bluecross.svg': 'https://upload.wikimedia.org/wikipedia/commons/1/1a/BlueCross_BlueShield.svg',
    'deltadental.svg': 'https://upload.wikimedia.org/wikipedia/en/f/f6/Delta_Dental_logo.svg'
}

os.makedirs('public/logos', exist_ok=True)

for name, url in logos.items():
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            content = response.read()
            with open(os.path.join('public/logos', name), 'wb') as f:
                f.write(content)
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
