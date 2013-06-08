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
	


	var matrix=[-2,-1,0,1,2,0,0,3,0,0,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0];
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

var DTM1 = T([0,2])([20,-0.1])(COLOR([134/255,105/255,60/255])(CUBOID([20,20,0.1])));
DRAW(STRUCT([DTM,DTM1]));
