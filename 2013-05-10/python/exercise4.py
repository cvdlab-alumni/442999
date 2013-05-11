from pyplasm import *
import scipy
from scipy import *

#---------------------------------------------------------
def VERTEXTRUDE((V,coords)):
    """
        Utility function to generate the output model vertices in a 
        multiple extrusion of a LAR model.
        V is a list of d-vertices (each given as a list of d coordinates).
        coords is a list of absolute translation parameters to be applied to 
        V in order to generate the output vertices.
        
        Return a new list of (d+1)-vertices.
    """
    return CAT(AA(COMP([AA(AR),DISTR]))(DISTL([V,coords])))

def cumsum(iterable):
    # cumulative addition: list(cumsum(range(4))) => [0, 1, 3, 6]
    iterable = iter(iterable)
    s = iterable.next()
    yield s
    for c in iterable:
        s = s + c
        yield s

def larExtrude(model,pattern):
    V,FV = model
    d = len(FV[0])
    offset = len(V)
    m = len(pattern)
    outcells = []
    for cell in FV:
        # create the indices of vertices in the cell "tube"
        tube = [v + k*offset for k in range(m+1) for v in cell]
        # take groups of d+1 elements, via shifting by one
        rangelimit = len(tube)-d
        cellTube = [tube[k:k+d+1] for k in range(rangelimit)]
        outcells += [scipy.reshape(cellTube,newshape=(m,d,d+1)).tolist()]
    outcells = AA(CAT)(TRANS(outcells))
    outcells = [group for k,group in enumerate(outcells) if pattern[k]>0 ]
    coords = list(cumsum([0]+(AA(ABS)(pattern))))
    outVerts = VERTEXTRUDE((V,coords))
    newModel = outVerts, CAT(outcells)
    return newModel

def GRID(args):
    model = ([[]],[[0]])
    for k,steps in enumerate(args):
        model = larExtrude(model,steps*[1])
    V,cells = model
    verts = AA(list)(scipy.array(V) / AA(float)(args))
    return MKPOL([verts, AA(AA(lambda h:h+1))(cells), None])

#-------------------Codice preso da facebook di Marco Liceti
def DOMAIN2D(domains1D):
    def aux(q):
        a = q[0]
        b = q[1]
        c = q[2]
        d = q[3]
        return [ [ a, b, d ], [ d, b, c ] ]
    dd = PROD([ domains1D[0], domains1D[1] ])
    complex = UKPOL(dd)
    points = complex[0]
    cells = CAT(AA(aux)(complex[1]))
    return MKPOL([ points, cells, None ])

ld = INTERVALS(1)(32)
rd = INTERVALS(2 * PI)(32)

dd1 = DOMAIN2D([ ld, rd ])
dd2 = PROD([ ld, rd ])



#------------------Esericise2---------------------------------------


domain1=INTERVALS(1)(20)
points1 = [[2.5,1],[2.5,1],[2.5,1],[0.6,1.1],[0.2,1.4],[0.2,1.7],[1.5,3],[4.2,3.6],[7.6,3.8],[8.7,5.2],[9.7,5.5],[12.4,5.3],[16.9,4.4],[18.2,3.7],[19,3.8],[19,4],[19,4],[19,3.4],[18.8,2.7],[19,2.1],[18.7,1.8],[17.8,1.3],[16.5,1],[16.4,1.7],[16,2.2],[15.4,3],[13.7,3],[13,2.4],[12.8,1.4],[12.9,1.1],[12.6,0.9],[6,1],[5.2,1.7],[5.2,2.5],[4.2,3],[3.2,2.5],[4.2,3],[3.2,2.5],[2.7,1.7],[2.5,1],[2.5,1],[2.5,1]]
latosx=STRUCT([SPLINE(CUBICUBSPLINE(domain1))(points1)])
#VIEW(STRUCT([latosx]))


points2=[[0,4],[0,4],[0,4],[0.3,6],[1.9,7],[3.5,7.5],[8,7.6],[15.5,7.3],[18.5,6.6],[18.5,6.6],[19,4],[18.5,0.8],[18.5,0.8],[15.5,0.1],[8,0.3],[3.5,0.2],[1.9,0.7],[0.3,2.5],[0,4],[0,4],[0,4]]
alto=STRUCT([SPLINE(CUBICUBSPLINE(domain1))(points2)])
#VIEW(STRUCT([alto]))

points3=[[3.5,1.2],[3.5,1.2],[3.5,1.2],[2,1.3],[1.5,1.9],[0.7,1.2],[0.7,1.2],[0,2.7],[0.3,3.6],[0.8,4],[0.8,4],[1.1,5.1],[1.7,5.5],[3.5,5.6],[5.7,5.5],[6.4,5.1],[6.8,4], [6.8,4],[7.2,3.6],[7.5,2.7], [6.8,1.2],[6.8,1.2],[6.3,1.9],[5.2,1.3],[3.5,1.2],[3.5,1.2],[3.5,1.2]]
dietro=STRUCT([SPLINE(CUBICUBSPLINE(domain1))(points3)])
#VIEW(STRUCT([dietro]))

points4=[[3.5,1.2],[3.5,1.2],[3.5,1.2],[1,1],[0.1,1.4],[0,2.3],[0,2.7],[0.3,3.6],[0.8,4],[0.8,4],[1.1,5.1],[1.7,5.5],[3.5,5.6],[5.7,5.5],[6.4,5.1],[6.8,4], [6.8,4],[7.2,3.6],[7.5,2.3],[7.4,1.4],[6.4,1],[3.5,1.2],[3.5,1.2],[3.5,1.2]]
davanti=STRUCT([SPLINE(CUBICUBSPLINE(domain1))(points4)])
#VIEW(STRUCT([davanti]))

points5=[[3.5,1.2],[3.5,1.2],[3.5,1.2],[1,1],[0.1,1.4],[0,2.3],[0,2.7],[0.3,3.6],[0.8,4],[3.7,4.5],[6.8,4],[7.2,3.6],[7.5,2.3],[7.4,1.4],[6.4,1],[3.5,1.2],[3.5,1.2],[3.5,1.2]]
funcia=STRUCT([SPLINE(CUBICUBSPLINE(domain1))(points5)])


mock_up=(STRUCT([R([2,3])(PI/2)(latosx),T([1])([19])(R([1,2])(PI/2)(R([2,3])(PI/2)(dietro))),T([3])(5.6)(alto),T([2])([7.4])(R([2,3])(PI/2)(latosx)),T([1])([12])(R([1,2])(PI/2)(R([2,3])(PI/2)(davanti))),T([1])([8])(R([1,2])(PI/2)(R([2,3])(PI/2)(funcia)))]))

mock_up1=(STRUCT([S([1,2,3])([3,3,3])(mock_up)]))
#VIEW(mock_up1)


#-------------------Esercise3--------------------------------
domain=GRID([20,20])
points1 = [ [ 4, 0, 5 ], [ 6, 0, 0.5 ], [ 7, 7, 7 ],[3,4,5]]
c1 = BEZIER(S1)(points1)

s = ROTATIONALSURFACE(c1)
surf1 = MAP(s)(dd1)
surf2 = MAP(s)(dd2)

#VIEW(surf1)

#cerchione =COLOR(BLACK)(OFFSET([0.1,0.2,0.1])(CIRCUMFERENCE(1)(30)))

cerchione =COLOR(GRAY)(OFFSET([0.1,0.2,0.1])(ELLIPSE([1.2,1.2])(8)))
gomma=COLOR(BLACK)(T([3])(-4.2)(S([1,2,3])([0.4,0.4,1])(surf1)))
routa=(STRUCT([cerchione,gomma]))
#VIEW(routa)




profile=BEZIER(S1)([[0,0,0],[-2/2,0,0],[3/2,0,2]]) # defined in xz!
domain=GRID([20,20])
a=(OFFSET([0.2,0.2,0.2])(MAP(ROTATIONALSURFACE(profile))(S(2)(PI/16)(domain))))
#a=(MAP(ROTATIONALSURFACE(profile))(S(2)(PI/16)(domain)))
b=((R([1,2])(-PI/2)(a)))
raggi=(STRUCT([ROTATE([1,3])(PI/2)(b),ROTATE([1,3])((3)*PI/2)(b),ROTATE([1,3])((PI/4))(b),ROTATE([1,3])((5)*PI/4)(b),ROTATE([1,3])((7)*PI/4)(b),ROTATE([1,3])((3)*PI/4)(b)]))


#VIEW(raggi)

ruota1=(STRUCT([cerchione,T([3])(1)(S([1,2])([0.55,0.55])(R([2,3])(PI/2)(raggi))),COLOR(BLACK)(T([3])(-4)(S([1,2,3])([0.4,0.4,1])(surf1)))]))

#VIEW(ruota1)
mock_up1=COLOR(RED)((STRUCT([S([1,2,3])([2,2,2])(mock_up)])))
#VIEW(mock_up1)

wheels=(R([2,3])(PI/2)(ruota1))
wheels1=R([1,2])(PI)(R([2,3])(PI/2)(ruota1))
mock_up2=(STRUCT([mock_up1,T([1,3])([8,3])(wheels),T([1,3])([29.5,3])(wheels),T([1,2,3])([8,15.2,3])(wheels1),T([1,2,3])([29.5,15.2,3])(wheels1)]))
#VIEW(mock_up2)



#-----------------Esercise4----------------------------------------




sterzo=COLOR(BROWN)((TORUS([2.5,2])([30,20])))
sterzo1=STRUCT([sterzo])
#VIEW(sterzo1)


profile_st=BEZIER(S1)([[0,0,0],[2,0,1]]) # defined in xz!
domain=GRID([12,40])
st_1=(MAP(ROTATIONALSURFACE(profile_st))(S(2)(PI/16)(domain)))
st_2=R([1,2])(PI)(st_1)
st_3=R([1,2])(PI/2)(st_1)

st=COLOR(GRAY)(STRUCT([st_1,st_2,st_3]))
#VIEW(st)


sterzo2=(STRUCT([T([3])(1)(sterzo),(st)]))
VIEW(sterzo2)

circle=CIRCLE(0.4)([8,8])
#VIEW(circle)
circle3d=(OFFSET([0.01,0.02,0.01])(circle))

circle1=R([1,2])((0.03*PI))((COLOR(GREEN)(T([1,2,3])([0,1,0.6])(R([2,3])(PI/4)(CIRCLE(0.1)([20,20]))))))
circle2=R([1,2])((0.03*PI))((COLOR(GREEN)(T([1,2,3])([0,1.5,0.8])(R([2,3])(PI/4)(CIRCLE(0.15)([20,20]))))))
circle3=R([1,2])(PI/2)(circle2)
circle4=R([1,2])(PI/2)(circle1)
circle5=R([1,2])(-PI/2)(circle2)
circle6=R([1,2])(-PI/2)(circle1)




sterzo4=(STRUCT([circle3d,sterzo2,circle1,circle2,circle3,circle4,circle5,circle6]))
VIEW(sterzo4)


mock_up3=STRUCT([mock_up2,T([1,2,3])([16,10.2,6])(R([1,3])(-PI/4)(sterzo4))])
VIEW(mock_up3)










