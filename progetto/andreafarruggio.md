###WEBDICOM

Andrea Farruggio

TASK : IMAGE SEGMENTATION

- - -

PROBLEM LIST:

- The Threshold algortim for image segmentation
- Analysis of an implementation of image segmentation in ImageJ

- - -

SOLUTION:

- The plugin find in ImageJ for image segmntation is RATS :
- module RATS(Robust Automatic Threshold Selection)
- Try to integrete the algoritm in java or in a applet

- - -

-How the algorithm works

 - RATS is a method to automatically compute a threshold without using the histogram of the image. 
 - It compute a weighted average of the image intensity, using the gradient of the image, as shown in the following equation:
![MediaPesata](https://github.com/cvdlab-cg/442999/edit/master/progetto/immagini/sommatoria.jpg )



- - -
-The input/output file

![Input_Output](https://github.com/cvdlab-cg/442999/edit/master/progetto/immagini/input_output.jpg)
