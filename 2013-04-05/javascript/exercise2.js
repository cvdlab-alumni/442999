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



//ESERCIZIO 2 

//GRIGLIA PIANO TERRA
part0f0=GRID([[-3,14.3],[-4.8,1.8],[0.1]])
part1f0=GRID([[-3,15],[-6.6,1.8],[0.1]])
part2f0=GRID([[-5.1,6],[-8.4,2.6],[0.1]])
part3f0=GRID([[3],[-13.1,0.5],[0.1]])
part4f0=GRID([[-3,16.2],[-13.1,0.5],[0.1]])
part5f0=GRID([[-11.1,8],[-8.4,4.7],[0.1]])
part6f0=GRID([[-3,2.2],[-8.4,4.7],[0.1]])
part9f0=GRID([[-3,0.5,-1.4,0.5],[-4.4,0.5],[0.1]])

floor0=STRUCT([part0f0,part1f0,part2f0,part3f0,part4f0,part5f0,part6f0,part9f0])
//VIEW(floor0)

//riglia 1° piano divisa in parti
part0f1=GRID([[8.8],[10.9],[0.1]])
part1f1=GRID([[-8.8,14,1],[3.9],[0.1]])
part2f1=GRID([[-12,10.9],[-3.9,9.6],[0.1]])
part3f1=GRID([[-10.4,1.6],[-7.9,5.6],[0.1]])
part4f1=GRID([[-9.5,0.8],[-8.5,5],[0.1]])
part5f1=GRID([[-8.8,0,7],[-8.5,2.4],[0.1]])
part6f1=GRID([[2.4],[2.6],[0.1]])

//STRUCT del piano al piano terra e poi traslato dell'altezza del piano
floor1basso=STRUCT([part0f1,part1f1,part2f1,part3f1,part4f1,part5f1,part6f1])
floor1=T([3])(4.4)(floor1basso)
//VIEW(floor1)

//Griglia 2° piano divisa in parti
part0f2=GRID([[-11.7,11.2],[13.5],[0.1]])
part1f2=GRID([[-9.6,2.1],[-10.9,2.6],[0.1]])
part3f2=GRID([[9.6],[-13,0.5],[0.1]])
part4f2=GRID([[0.5],[-11.1,2],[0.1]])
part5f2=GRID([[-1.4,8.3],[-10.9,0.3],[0.1]])
part6f2=GRID([[11.7],[0.5],[0.1]])
part7f2=GRID([[0.3],[-0.5,10.1],[0.1]])

//STRUCT del piano al piano terra e poi traslato dell'altezza del piano
floor2basso=STRUCT([part0f2,part1f2,part3f2,part4f2,part5f2,part6f2,part7f2])
floor2=T([3])(8.8)(floor2basso)

//VIEW(floor2)



//Griglia 3° piano divisa in parti
part0f3=GRID([[-17.9,5],[-11.1,2],[0.1]])
part1f3=GRID([[-11.2,11.7],[11.1],[0.1]])
part2f3=GRID([[0.5],[13.5],[0.1]])
part3f3=GRID([[-0.5,10.7],[0.5],[0.1]])
part4f3=GRID([[-0.5,10.7],[-13.2,0.3],[0.1]])
part5f3=GRID([[-11.2,11.7],[-13,0.5],[0.1]])
part6f3=GRID([[-11.2,0.5],[-11.1,2],[0.1]])
//STRUCT del piano al piano terra e poi traslato dell'altezza del piano
floor3basso=STRUCT([part0f3,part1f3,part2f3,part3f3,part4f3,part5f3,part6f3])
floor3=T([3])(13.2)(floor3basso)
//VIEW(floor3)
//Griglia 4° piano divisa in parti

part0f4=GRID([[-11.2,11.7],[13.5],[0.1]])
part1f4=GRID([[11.2],[-10.8,2.7],[0.1]])
part2f4=GRID([[11.2],[0.5],[0.1]])
part3f4=GRID([[0.5],[-0.5,10.3],[0.1]])
//STRUCT del piano al piano terra e poi traslato dell'altezza del piano
floor4basso=STRUCT([part0f4,part1f4,part2f4,part3f4])
floor4=T([3])(17.2)(floor4basso)
//VIEW(floor4)

//STRUCT dei 5 piani
floors=R([1,2])(PI)(STRUCT([floor0,floor1,floor2,floor3,floor4]))
VIEW(floors)



building1=S([1,2])([-1,-1])(T([1,2])([22,13])(STRUCT([floors,pillars])))
VIEW(building1)





