# Created by RAHUL S H on 4/7/20
from PIL import Image
import numpy as np
import cv2

# Paths of two image frames

image1Path = "/Users/rahulsh/Documents/Rahul/images/11.jpg"

image2Path = "/Users/rahulsh/Documents/Rahul/images/12.jpg"

# Open the images

image1 =Image.open ( image1Path );

image2 = Image.open ( image2Path );

#Convert image to gray scale
grayImage1 = cv2.cvtColor ( np.float32(image1) , cv2.COLOR_BGR2GRAY )
grayImage2 = cv2.cvtColor ( np.float32(image2) , cv2.COLOR_BGR2GRAY )

#Apply Gaussian Blurring
img_blur = cv.GaussianBlur(img, (figure_size, figure_size),0)
img_blur2 = cv.GaussianBlur(img2, (figure_size, figure_size),0)

# Get the image buffer as ndarray

buffer1 = np.asarray ( grayImage1 );

buffer2 = np.asarray ( grayImage2);

# Subtract image2 from image1

buffer3 = buffer1 - buffer2;

differenceImage = Image.fromarray ( buffer3 );


# Display all the images including the difference image

image1.show ( );

image2.show ( );
#
differenceImage.show ( );