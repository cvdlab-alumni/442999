
###Scala
depth =  0.3 # pedata 
raiser = 0.7 # alzata
step2D = MKPOL([[[0,0],[0,0.5+raiser],[depth,raiser],[depth,0.5+raiser]],
    [[1,2,3,4]],None])
step3D = MAP([S1,S3,S2])(PROD([step2D,Q(1)]))
ramp = STRUCT(NN(6)([step3D,T([1,3])([depth,raiser])]))
VIEW(ramp)

#TRE rampe

ramp2=S([1,2,3])([-2,-2,1])(ramp)
positionr1=T([1,2])([19,2])(ramp2)
###VIEW(ramp2)

ramp3=S([1,2,3])([-2,-2,1])(ramp)
positionr2=T([1,2,3])([15,2,4.4])(ramp3)
###VIEW(ramp3)



ramp4=S([1,2,3])([-2,-2,1])(ramp)
positionr3=T([1,2,3])([6,2,8.8])(ramp4)
###VIEW(ramp4)


####COSTRUZIONE FINALE (Le corbusier piange)



building=STRUCT([building2,nordwindows,positionr1,positionr2,positionr3])
VIEW(building)