###windows nord 



part2wn=GRID([[-0.5,10],[0.001],[-6.6,2,-2.4,2,-2,2]])

part3wn=GRID([[-10.5,0.5],[0.001],[-4.8,4.3,-0.5,3.5,-0.5,3.5]])


windows=COLOR(BLACK)(STRUCT([part2wn,part3wn]))
nordwindows=(R([1,2])(PI/2)(windows))
VIEW(nordwindows)



building3=STRUCT([building2,nordwindows])
VIEW(building3)

