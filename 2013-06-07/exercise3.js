
//---------Esercise1-----

var n=20 ;
var uv = DOMAIN([[0,n],[0,n]])([n,n]);

//---- Function x(uv) and y(uv)----
find_x=function (uv){
	u=uv[0];
	return [u];
}

find_y=function (uv){
	v=uv[1];
	return [v];
}

//---- Function x(uv) and y(uv)----

array1=[];
array2=[];
find_z=function (uv){
	x=find_x(uv);
	y=find_y(uv);

	//altitude=((Math.random()));;
	


	var matrix=[0,1,2,0,0,3,0,0,0,0,6,0,0,0,7,0,0,-1,-1,-1,0,0,0,0,0,0];
	var len =  matrix.length;
	var index = (Math.round((Math.random()*len)+1));
	var al = matrix[index];



	//al= + (1)* (Math.pow(-1,(Math.floor(Math.random() * 5) )));

	//z= altitude*al;
	
	z= al ;
	array1.push(z);
	array2.push([x,y,z]);
	return [x,y,z];
}


var DTM =COLOR([134/255,105/255,60/255])( MAP(find_z)(uv));

DRAW(DTM);

//------Esercise2-----

//----Il lago viene inserito nei punti con altitudine -1 solo su mezza mappa   -----

//var len1 =  array1.length;
var green = [72/255,209/255,204/255];

//var min = Math.min.apply( array1 );

//var indexmin=array1.indexOf(-2);

lago = STRUCT([COLOR(green)(CUBOID([1,1,0.2]))]);

var l=0;
var len2= array1.length/2 ;
for(l=0; l<= len2 ; l++){
	var xl=0;
	var yl=0;
	var zl=0;
	
	if (array1[l]===-1){   xl=array2[l][0];
					 yl=array2[l][1];
					 zl=0;

					 lago1=T([0,1,2])([xl,yl,-0.1])(lago)	;
						DRAW(lago1);

	 				//(DRAW([T([0,1,2])([xl,yl,0.2]) (lago)]))
} 
}






















//-------Exercise3-----


var matrix1=[0.1,0.2,0.3];
var index = (Math.round((Math.random()*matrix1.length)+1));
var h = matrix1[index];



var domain = DOMAIN([[0,2*PI],[0,2*PI]])([12,12]);
var mapping = function (v) {
var a = v[0];
var b = v[1];

var u = (SIN(a)*COS(b))/2;
var v = (SIN(a)*SIN(b))/2;
var w = COS(a)/2;

return[u,v,w];
}


k=10
var model = S([0,1,2])([0.6,0.6,0.6])(MAP(mapping)(domain));
var i=0;


var matrix1=[0.1,0.2,0.3];
var index = (Math.round((Math.random()*matrix1.length)+1));
var h = matrix1[index];

var matrix2=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var matrix3=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var index = (Math.round((Math.random()*1)+1));
var x2 = matrix2[index];
var y2 = matrix3[index];



brown = [144/255,132/255,53/255];
green1 = [123/255,169/255,91/255];
trunk = COLOR(brown)(CYL_SURFACE([0.1,0.6])(12));
up1 = T([2])([0.5])(COLOR(green1)(model));
tree= STRUCT([trunk,up1]);
//tree2 = REPLICA(10)(T([0,1])([0,0])(tree))
tree1 = (T([0,1,2])([x2,y2,h])(STRUCT([trunk, up1 ])));

//DRAW(tree1)


var l=0;
var len2= array1.length;
for(l=0; l<= len2 ; l++){
	var xl=0;
	var yl=0;
	var zl=0;
	
	if (array1[l]===1){   xl=array2[l][0];
					 	  yl=array2[l][1];
					 	  zl=1;

					    tree3=T([0,1,2])([xl,yl,zl])(tree)	;
						DRAW(tree3);

	 				
} 
}

var l=0;
var len2= array1.length ;
for(l=0; l<= len2 ; l++){
	var xl=0;
	var yl=0;
	var zl=0;
	
	if (array1[l]===2){   xl=array2[l][0];
					 	  yl=array2[l][1];
					 	  zl=2;

					    tree3=T([0,1,2])([xl,yl,zl])(tree)	;
						DRAW(tree3);

	 				
} 
}


var l=0;
var len2= array1.length ;
for(l=0; l<= len2 ; l++){
	var xl=0;
	var yl=0;
	var zl=0;
	
	if (array1[l]===3){   xl=array2[l][0];
					 	  yl=array2[l][1];
					 	  zl=3;

					    tree3=T([0,1,2])([xl,yl,zl])(tree)	;
						DRAW(tree3);

	 				
} 
}

var l=0;
var len2= array1.length ;
for(l=0; l<= len2 ; l++){
	var xl=0;
	var yl=0;
	var zl=0;
	
	if (array1[l]===6){   xl=array2[l][0];
					 	  yl=array2[l][1];
					 	  zl=6;

					    tree3=T([0,1,2])([xl,yl,zl])(tree)	;
						DRAW(tree3);

	 				
} 
}

var l=0;
var len2= array1.length ;
for(l=0; l<= len2 ; l++){
	var xl=0;
	var yl=0;
	var zl=0;
	
	if (array1[l]===7){   xl=array2[l][0];
					 	  yl=array2[l][1];
					 	  zl=7;

					    tree3=T([0,1,2])([xl,yl,zl])(tree)	;
						DRAW(tree3);

	 				
} 
}


/*
uv3 = DOMAIN([[0,1],[0,1]])([32,32]);
Ca = BEZIER(S0)([[0,0,0],[0,3,0],[3,3,0],[3,0,0]]);
Cb = BEZIER(S0)([[0,0,0],[0,-3,0],[3,-3,0],[3,0,0]]);
//DRAW(MAP(Ca)(u));
h1=2
Sa = INTERP_P2C(S1)([[1.5,0,h1],Ca]);

Sb = INTERP_P2C(S1)([[1.5,0,h1],Cb]);
tree3=STRUCT([COLOR(green1)(MAP(Sa)(uv3)),COLOR(green1)(MAP(Sb)(uv3)),trunk]);
*/

//DRAW(tree)



//---------------------


















