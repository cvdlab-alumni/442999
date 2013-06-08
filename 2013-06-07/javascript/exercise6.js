/*
-----ESERCIZIO6

*/

function v_to_obj (v) {
	var v_to_obj= '';
	len=v.length;
	var i=0;
	for (i=0; i<=len ; i++){
		add0 = v[i][2];
		console.log(add0)
		
	
		if ( add0 !== undefined ){ v_to_obj +=  'v ' + '[' + v[i][0] + ' ' + v[i][1] + ' '+  v[i][2] + ']' + '\n' ;} 
			
			else 
				 

				{ v_to_obj += 'v ' + '[' + v[i][0] + ' ' + v[i][1] + ' 0'+ ']' + '\n' ; }
	}




	return v_to_obj;
}


function fv_to_obj (fv) {
	var tv_to_obj = '';
	var lenvf= fv.length;
	var i=0;
	var k=0;
	for (i=0; i<lenvf; i++){
		if( vf[i][3] !== undefined ){
			console.log(vf[i][3] );
		vf_to_obj += 'vf ' + ' [ ' + ' vf[i][0] ' + ' ' + ' vf[i][1] '+ ' ' + ' vf[i][2] '+ ' ' + ' vf[i][3] ' + ' ' + ']' + '\n' ;}
		else {vf_to_obj += ' vf ' +' [ ' + ' vf[i][0] ' + ' '+ ' vf[i][1] ' + ' ' + ' vf[i][2] ' + ' ' + ']' + '\n' ;}

	}
	return vf_to_obj
}