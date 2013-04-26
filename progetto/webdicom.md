# WebDicom



## Segmentation Task
---

## Study of implementations of segmentation algorithms


 

- JAVA
- PYTHON
- JAVASCRIPT

---

# JAVA

## The ImageJ library



###RATS (Robust Automatic Threshold Selection)

RATS is a method to automatically compute a threshold without using the histogram of the image.
It compute a weighted average of the image intensity, using the gradient of the image, as shown in the following equation:

![](https://raw.github.com/cvdlab-cg/442999/master/progetto/immagini/sommatoria.jpg)

###The input/output file
 - In input take a DICOM image (8-bit grayscale)
 - Apply RATS algortim, that is a regionalized Threshold for grayscale image 
 - The output is a threshold image that is a binary image 
 ![input_output](https://raw.github.com/cvdlab-cg/442999/master/progetto/immagini/input_output.jpeg)

 ---
 
# PYTHON

### - Library PIL (Python Imaging  Library)
### - Library SCIKIT
### - Library SimpleITK

---

## PIL (Python Imaging Library)

#### The ImageOps Module

 - ##### Input
 
 ![image](https://raw.github.com/cvdlab-cg/442999/master/progetto/PIL/Cartilagini.png)

---

  - ##### **Posterize**
  
   ![image](https://raw.github.com/cvdlab-cg/442999/master/progetto/PIL/posterize_PIL.png)
--- 
   
  - ##### **Solarize**
  
  ![image](https://raw.github.com/cvdlab-cg/442999/master/progetto/PIL/solarize_PIL.png)  
---

####The ImageFilter Module
- 
 - ##### **Emboss** 
 
 ![image](https://raw.github.com/cvdlab-cg/442999/master/progetto/PIL/Emboss_PIL.png)
 ---
 
 - **Edge_Enhance**
 
  ![image](https://raw.github.com/cvdlab-cg/442999/master/progetto/PIL/edge_enhance_PIL.png)
 --- 
  
 - **Edge_Enhance_More** 
 
 ![image](https://raw.github.com/cvdlab-cg/442999/master/progetto/PIL/enhance_more.png)
---
 
 - **Find_Edge** 
 
 ![image](https://raw.github.com/cvdlab-cg/442999/master/progetto/PIL/Find_Edges_PIL.png)

---

## SCIKIT-Image (image processing in python)

- **Canny Edge Detection**

![image](https://raw.github.com/cvdlab-cg/442999/master/progetto/scimage/canny_edge_detection.png)

---

- **Local Otsu Threshold vs Global Otsu Threshold**


![image](https://raw.github.com/cvdlab-cg/442999/master/progetto/scimage/thresholding_localvsotsu.png)

---
- **Global Thresholding vs Adaptative Threshold**


![image](https://raw.github.com/cvdlab-cg/442999/master/progetto/scimage/GlobalvsAdaptativeThresholding.png)

---
- **Sobel +Watershed segmentation vs Colored Slic** 


![image](https://raw.github.com/cvdlab-cg/442999/master/progetto/scimage/soble_watershed_slic.png)

---

## SimpleITK








 
 
