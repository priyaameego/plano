from PIL import Image

try:
    img = Image.open(r"e:\plano\src\assets\logo1.png")
    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
        background = Image.new('RGB', img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3]) # 3 is the alpha channel
        background.save(r"e:\plano\src\assets\logo1.png")
        print("Successfully added white background.")
    else:
        print("Image doesn't have transparency.")
except Exception as e:
    print(f"Error: {e}")
