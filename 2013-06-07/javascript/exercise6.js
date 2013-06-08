/*
-----ESERCIZIO6

*/

function v_to_obj (v) {
	var v_to_obj= '';
	len=v.length;
	var i=0;
	for (i=0; i<len ; i++){
		add0 = v[i][2];
		//console.log(add0)
		
	
		if ( add0 !== undefined ){ v_to_obj +=  'v ' + '[' + v[i][0] + ' ' + v[i][1] + ' '+  v[i][2] + ']' + '\n' ;} 
			
			else 
				 

				{ v_to_obj += 'v ' + '[' + v[i][0] + ' ' + v[i][1] + ' 0'+ ']' + '\n' ; }
	}




	return v_to_obj;
}


function fv_to_obj (fv) {
	var fv_to_obj = '';
	var lenfv= fv.length;
	var i=0;
	//var k=0;
	for (i=0; i<lenfv; i++){
		if( fv[i][3] !== undefined ){
			//console.log(fv[i][3] );
		fv_to_obj += 'fv ' + ' [ ' +  fv[i][0]  + ' ' +  fv[i][1] + ' ' +  fv[i][2] + ' ' +  fv[i][3]  + ' ' + ']' + '\n' ;}
		else {fv_to_obj += ' fv ' +' [ ' + fv[i][0]  + ' '+  fv[i][1]  + ' ' +  fv[i][2]  + ' ' + ']' + '\n' ;}

	}
	return fv_to_obj
}




FV = [[5,6,7,8],
	[0,5,8],
	[0,4,5],
	[1,2,4,5],
	[2,3,5,6],
	[0,8,7],
	[3,6,7],
	[1,2,3], 
	[0,1,4]]

V = [[0,6],
	[0,0],
	[3,0],
	[6,0],
	[0,3],
	[3,3],
	[6,3],
	[6,6],
	[3,6]]


 fv_to_obj(FV);
 v_to_obj(V);





