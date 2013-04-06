



// adapt pyplasm code to plasm.js code

T = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
     return object.clone().translate(dims, values);
    };
  };
};
  
R = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });
   
  return function (angle) {
    return function (object) {
      return object.clone().rotate(dims, angle);
    };
  };
};
  
S = function (dims) {
  dims = dims.map(function (dim) {
    return dim - 1;
  });

  return function (values) {
    return function (object) {
      return object.clone().scale(dims, values);
    };
  };
};

S3 = S2;
S2 = S1;
S1 = S0;

GRID = SIMPLEX_GRID;

NN = REPLICA;

VIEW = DRAW;
//

//esercizio1

//fila 0 dei pilastri rettangolari
pill0 = GRID([[-3,0.5,-2.1,0.5,-5,0.5,-5,0.5],[-10.1,0.5],[4.4]])
//cilindro di h=12 per la fila dei pilastr
trunk = CUBOID([ 0.2,0.2,5])

pillars0 = STRUCT([pill0,T([1])(0.3)(trunk),T([1])(5.6)(trunk),T([1])(11.4)(trunk),T([1])(16.8)(trunk),T([1])(22.4)(trunk),T([1,2])([0.3,10.5])(trunk)])
//VIEW(pillars0)

//pill1 e pill2 sono le due file di pilastri al primo piano
pill1 =GRID([[0.5,-5,0.5,-5,0.5],[-10.1,0.5],[4.4]])
pill2 =GRID([[0.5,-5,0.5,-5,0.5,-5,0.5,-5,0.5],[0.5],[4.4]])

//unico pilastro cilindrico al primo piano


pillars1 = (T([3])(4.4)(STRUCT([pill1,pill2,T([1,2])([17,11])(trunk)])))

//VIEW(pillars1)

//file dei pilastri al secondo piano
pill3=GRID([[0.5,-5,0.5,-16.3,0.5],[0.5],[4.4]])
pill4=GRID([[0.5,-5,0.5,-5,0.5,-5,0.5],[-10.1,0.5],[4.4]])
pillars2=(T([3])(8.8)(STRUCT([pill3,pill4])))
//VIEW(pillars2)

//file dei pilastri al 3 piano
pill5=GRID([[-11.2,0.5,-10.7,0.5],[0.5],[4.4]])
pill6=GRID([[-11.2,0.5,-5,0.5],[-10.1,0.5],[4.4]])
pill7=GRID([[0.3,-5.5,0.3],[-10.3,0.3],[4.4]])
pillars3=(T([3])(13.2)(STRUCT([pill5,pill6,pill7])))

//VIEW(pillars3)
//STRUCT dei pilastri di tutti e 4 i piani
pillars=R([1,2])(PI)(STRUCT([pillars1,pillars0,pillars3,pillars2]))

VIEW(pillars)

