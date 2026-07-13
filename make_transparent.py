from PIL import Image

def make_transparent():
    img = Image.open(r"e:\plano\public\logo1.png")
    img = img.convert("RGBA")
    datas = img.getdata()

    newData = []
    # Tolerance for black background
    for item in datas:
        if item[0] < 25 and item[1] < 25 and item[2] < 25:
            # Change to transparent
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(r"e:\plano\public\logo1.png", "PNG")
    print("Background made transparent.")

if __name__ == "__main__":
    make_transparent()
