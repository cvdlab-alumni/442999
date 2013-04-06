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





//finestre parte nord


part2wn=GRID([[-0.5,10],[0.001],[-6.6,2,-2.4,2,-2,2]])

part3wn=GRID([[-10.5,0.5],[0.001],[-4.8,4.3,-0.5,3.5,-0.5,3.5]])


windows=COLOR(1,1,1)(STRUCT([part2wn,part3wn]))
nordwindows=(R([1,2])(PI/2)(windows))
VIEW(nordwindows)



building3=STRUCT([building2,nordwindows])
VIEW(building3)