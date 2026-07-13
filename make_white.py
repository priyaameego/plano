from PIL import Image

def make_white_bg():
    try:
        img = Image.open(r"e:\plano\public\logo1.png")
        img = img.convert("RGBA")
        
        # Create a new white image
        background = Image.new('RGBA', img.size, (255, 255, 255, 255))
        
        # Paste the image on the white background using the image's alpha as a mask
        background.paste(img, (0, 0), img)
        
        # Convert to RGB to drop alpha channel and save
        background = background.convert('RGB')
        background.save(r"e:\plano\public\logo1.png", "PNG")
        print("White background added successfully.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    make_white_bg()
