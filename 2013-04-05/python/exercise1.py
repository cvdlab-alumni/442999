

from pyplasm import *
GRID = COMP([INSR(PROD),AA(QUOTE)])

###fila 0 dei pilastri rettangolari
pill0 = GRID([[-3,0.5,-2.1,0.5,-5,0.5,-5,0.5],[-10.1,0.5],[4.4]])
###cilindro di h=12 per la fila dei pilastr
trunk = CYLINDER([ 0.2, (10./12)*4.4 ])(36)

pillars0 = STRUCT([pill0,T(1)(0.3)(trunk),T(1)(5.6)(trunk),T(1)(11.4)(trunk),T(1)(16.8)(trunk),T(1)(22.4)(trunk),T([1,2])([0.3,10.5])(trunk)])
//VIEW(pillars0)

###pill1 e pill2 sono le due file di pilastri al primo piano
pill1 =GRID([[0.5,-5,0.5,-5,0.5],[-10.1,0.5],[4.4]])
pill2 =GRID([[0.5,-5,0.5,-5,0.5,-5,0.5,-5,0.5],[0.5],[4.4]])

###unico pilastro cilindrico al primo piano
trunk1 = CYLINDER([ 0.2, (10./12)*4.4 ])(36)

pillars1 = COLOR(GREEN)(T(3)(4.4)(STRUCT([pill1,pill2,T([1,2])([17,11])(trunk1)])))

//VIEW(pillars1)

###file dei pilastri al secondo piano
pill3=GRID([[0.5,-5,0.5,-16.3,0.5],[0.5],[4.4]])
pill4=GRID([[0.5,-5,0.5,-5,0.5,-5,0.5],[-10.1,0.5],[4.4]])
pillars2=COLOR(BLACK)(T(3)(8.8)(STRUCT([pill3,pill4])))
//VIEW(pillars2)


###file dei pilastri al 3 piano
pill5=GRID([[-11.2,0.5,-10.7,0.5],[0.5],[4.4]])
pill6=GRID([[-11.2,0.5,-5,0.5],[-10.1,0.5],[4.4]])
pill7=GRID([[0.3,-5.5,0.3],[-10.3,0.3],[4.4]])
pillars3=COLOR(RED)(T(3)(13.2)(STRUCT([pill5,pill6,pill7])))

//VIEW(pillars3)
###STRUCT dei pilastri di tutti e 4 i piani
pillars=STRUCT([pillars1,pillars0,pillars3,pillars2])
VIEW(pillars)