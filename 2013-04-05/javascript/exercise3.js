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


//WEST SIDE
part0w=GRID([[19.2],[0.5],[-13.2,4.4]])
part2w=GRID([[2.5],[0.5],[-8.8,4.4]])
part1w=GRID([[-4,15.2],[0.5],[-8.8,4.4]])
part3w=GRID([[-2.5,1.5],[0.5],[-12.2,1]])
part4w=GRID([[-2.8,0.9],[0.5],[-10.5,1.8]])
part5w=GRID([[-2.5,1.5],[0.5],[-8.8,1.6]])
part6w=GRID([[4.2],[0.5],[-4.4,4.4]])

part7w=GRID([[-8.5,10.7],[0.5],[-4.4,4.4]])
part8w=GRID([[-4.2,4.3],[0.5],[-8.3,0.6]])
part9w=GRID([[-4.2,4.3],[0.5],[-4.4,2.1]])
part10w=GRID([[-6.8,12.4],[0.5],[4.4]])
part11w=GRID([[-5.9,1],[0.5],[3]])
part12w=GRID([[-5.9,1],[0.5],[-4,0.4]])
part13w=GRID([[-3,2.9],[0.5],[4.4]])

part14w=GRID([[3],[0.5],[-4.1,0.3]])
// 3 parti del balcone
part15wb=GRID([[-19.2,1.8],[0.5],[-4.7,1.2]])
part16wb=GRID([[-19.2,2],[0.5],[-4.4,0.4]])
part17wb=GRID([[-21,0.2],[0.5],[-4.8,1.2]])

westsulpiano=STRUCT([part0w,part1w,part2w,part3w,part4w,part5w,part6w,part7w,part8w,part9w,part10w,part11w,part12w,part13w,part14w,part15wb,part16wb,part17wb])
west=westsulpiano
//VIEW(west)


//EST SIDE
part0e=GRID([[-2,9.9],[0.5],[-4.4,8.8]])
part2e=GRID([[-2,9.9],[0.5],[-8.8,4.4]])

part1e=GRID([[-16.1,5.1],[0.5],[-4.4,8.8]])
part3e=GRID([[-16.1,5.1],[0.5],[-8.8,4.4]])
part4e=GRID([[-16.1,5.1],[0.5],[-13.2,4.4]])

part5e=GRID([[-2,9.9],[0.5],[-13.2,1.1]])
part6e=GRID([[-2,9.9],[0.5],[-16.2,1.6]])

part7e=GRID([[-11.9,4.3],[0.5],[-4.4,2.1]])
part8e=GRID([[-11.9,4.3],[0.5],[-8.2,0.5]])
part9e=GRID([[-11.9,4.3],[0.5],[-10.5,1.8]])
part10e=GRID([[-11.9,4.3],[0.5],[-13.2,1.3]])
part11e=GRID([[-11.9,4.3],[0.5],[-16.2,1.6]])

part13e=GRID([[-2,0.2],[0.5],[-14.3,1.9]])

part12e=GRID([[-11.4,0.5],[0.5],[-14.3,1.9]])



part15eb=GRID([[0.2],[0.5],[-4.8,1.2]])
part16eb=GRID([[2],[0.5],[-4.4,0.4]])
part17eb=GRID([[-0.2,1.8],[0.5],[-4.8,1.2]])

estsulpiano=STRUCT([part0e,part1e,part2e,part3e,part4e,part5e,part6e,part7e,part8e,part9e,part10e,part11e,part12e, part13e,part15eb,part16eb,part17eb])

estRuotato=R([1,2])(PI)(estsulpiano)
est=T([1,2])([21,12])(estRuotato)
//VIEW(est)


//SUD SIDE
//ultimo piano
part0s=GRID([[11.3],[0.5],[-13.2,1.3]])
part2s=GRID([[11.3],[0.5],[-16.4,1.6]])
part1s=GRID([[0.2,-2,0.2,-8.4,0.5],[0.5],[-14.4,1.9]])

//secondo piano

part3s=GRID([[2.4,-8.5,0.5],[0.5],[-8.8,4.4]])
part4s=GRID([[-2.4,8.5],[0.5],[-8.8,0.2,-3.5,0.6]])

//primo piano

part5s=GRID([[11.3],[0.5],[-8.3,0.5]])

part6s=GRID([[0.7,-1.4,0.4],[0.5],[-6,2.7]])


part7s=GRID([[-10.9,0.5],[0.5],[-4.4,4.4]])

part8s=GRID([[0.5,-1.8,8.9],[0.5],[-4.4,0.5]])

part9s=T([1,2])([-2,-4])(GRID([[-0.4,1.8],[0.5],[-9.1,1.3]]))



part14s=GRID([[0.5,-1.8,0.2],[0.5],[-4.8,1.1]])



//piano terra

part10s=GRID([[0.5,-1.6,0.5,-8.5,0.5],[0.5],[4.4]])
part12s=GRID([[-2.4,6.6],[0.5],[-4.2,0.2]])
part15s=GRID([[-2.4,6.6],[0.5],[2.4]])

part11s=GRID([[-7,2.1],[0.5],[-2.4,1.2]])


sudsulpiano=STRUCT([part0s,part1s,part2s,part3s,part4s,part5s,part6s,part7s,part8s,part9s,part10s,part11s,part12s,part14s,part15s])


sud=T([1,2])([23,0])(R([1,2])(PI/2)(sudsulpiano))
//VIEW(sud)


//NORD SIDE



part0n=GRID([[0.5,-10.5,0.5],[0.5],[17.8]])

part2n=GRID([[-0.5,10],[0.5],[-4.4,2.4,-1.7,2.4,-1.7,2.4,-1.7,1.6]])

part3n=GRID([[-10.5,0.5],[0.5],[-4.3,0.5,-4.3,0.5,-3.5,0.5,-3.5,0.5]])


nordsulpiano=STRUCT([part0n,part2n,part3n])
nord=(R([1,2])(PI/2)(nordsulpiano))
//VIEW(nord)



//STRUTTURA


structure=STRUCT([west,est,nord,sud])
VIEW(structure)

building1=(T([1,2])([22,13])(STRUCT([floors,pillars])))
VIEW(building1)


building2=STRUCT([building1,structure])
VIEW(building2)








