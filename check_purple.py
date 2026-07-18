import numpy as np
from PIL import Image

try:
    img1=np.array(Image.open('img1.jpg'))
    img2=np.array(Image.open('img2.jpg'))
    img3=np.array(Image.open('img3.jpg'))
    img4=np.array(Image.open('img4.jpg'))
    img5=np.array(Image.open('img5.jpg'))
    
    print('img1 purple:', np.sum((img1[:,:,0]>100) & (img1[:,:,2]>100) & (img1[:,:,1]<80)))
    print('img2 purple:', np.sum((img2[:,:,0]>100) & (img2[:,:,2]>100) & (img2[:,:,1]<80)))
    print('img3 purple:', np.sum((img3[:,:,0]>100) & (img3[:,:,2]>100) & (img3[:,:,1]<80)))
    print('img4 purple:', np.sum((img4[:,:,0]>100) & (img4[:,:,2]>100) & (img4[:,:,1]<80)))
    print('img5 purple:', np.sum((img5[:,:,0]>100) & (img5[:,:,2]>100) & (img5[:,:,1]<80)))
except Exception as e:
    print(e)
