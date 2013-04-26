from skimage.filter.rank import otsu
from skimage.filter import threshold_otsu
import matplotlib.pyplot as plt
import skimage
from skimage import data
from skimage.filter import threshold_otsu, threshold_adaptive
from skimage.morphology import disk

p8 = skimage.io.imread("Cartilagini.png")

radius = 10
selem = disk(radius)

# t_loc_otsu is an image
t_loc_otsu = otsu(p8, selem)
loc_otsu = p8 >= t_loc_otsu

# t_glob_otsu is a scalar
t_glob_otsu = threshold_otsu(p8)
glob_otsu = p8 >= t_glob_otsu

plt.figure()
plt.subplot(2, 2, 1)
plt.imshow(p8, cmap=plt.cm.gray)
plt.xlabel('original')
plt.colorbar()
plt.subplot(2, 2, 2)
plt.imshow(t_loc_otsu, cmap=plt.cm.gray)
plt.xlabel('local Otsu ($radius=%d$)' % radius)
plt.colorbar()
plt.subplot(2, 2, 3)
plt.imshow(p8 >= t_loc_otsu, cmap=plt.cm.gray)
plt.xlabel('original>=local Otsu' % t_glob_otsu)
plt.subplot(2, 2, 4)
plt.imshow(glob_otsu, cmap=plt.cm.gray)
plt.xlabel('global Otsu ($t=%d$)' % t_glob_otsu)