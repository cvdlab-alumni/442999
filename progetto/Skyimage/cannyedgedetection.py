import matplotlib.pyplot as plt
import skimage
from skimage import data
from skimage.filter import threshold_otsu, threshold_adaptive
import numpy as np
import matplotlib.pyplot as plt
from scipy import ndimage
from skimage import filter


from skimage import io

im=skimage.io.imread("Cartilagini.png")





edges1 = filter.canny(im)
edges2 = filter.canny(im, sigma=3)

# display results
plt.figure(figsize=(8, 3))

plt.subplot(131)
plt.imshow(im, cmap=plt.cm.jet)
plt.axis('off')
plt.title('noisy image', fontsize=20)

plt.subplot(132)
plt.imshow(edges1, cmap=plt.cm.gray)
plt.axis('off')
plt.title('Canny filter, $\sigma=1$', fontsize=20)

plt.subplot(133)
plt.imshow(edges2, cmap=plt.cm.gray)
plt.axis('off')
plt.title('Canny filter, $\sigma=3$', fontsize=20)

plt.subplots_adjust(wspace=0.02, hspace=0.02, top=0.9,
                    bottom=0.02, left=0.02, right=0.98)


plt.show()