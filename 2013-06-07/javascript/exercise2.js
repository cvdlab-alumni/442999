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
	


	var matrix=[0,1,2,0,0,3,0,0,0,0,6,0,0,0,7,0,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0];
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

var DTM1 =COLOR([134/255,105/255,60/255])(CUBOID([40,20,0.1]));
DRAW(STRUCT([DTM,DTM1]));

//------Esercise2-----

//----Il lago viene inserito nei punti con altitudine -1   -----

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




















