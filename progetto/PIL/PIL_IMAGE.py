 ##PIL_IMAGE

import PIL
import Image
import io
import ImageOps
import ImageFilter


image = Image.open("Cartilagini.png")

a=ImageOps.solarize(image, threshold=128) 
a.show()
bits=2
b=ImageOps.posterize(image, bits) 
b.show()


imout1 = image.filter(ImageFilter.EDGE_ENHANCE)
imout1.show()


imout2 = image.filter(ImageFilter.EDGE_ENHANCE_MORE)
imout2.show()


imout3 = image.filter(ImageFilter.EMBOSS)
imout3.show()


imout4 = image.filter(ImageFilter.FIND_EDGES)
imout4.show()



