###WEBDICOM

Andrea Farruggio

TASK : IMAGE SEGMENTATION

----------------------------------

PROBLEM LIST:

- Analysis of an implementation of image segmentation in ImageJ

-----------------------------------

SOLUTION:
- The plugin find in ImageJ for image segmntation is RATS :

- module RATS(Robust Automatic Threshold Selection)

-------------------------------------

How the algorithm works
 - RATS is a method to automatically compute a threshold without using the histogram of the image. It compute a weighted average of the image intensity, using the gradient of the image, as shown in the following equation:


