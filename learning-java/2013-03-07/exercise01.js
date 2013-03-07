

function identity (n){
	var n;
	var s='\n'; 
for (var i = 0; i <=n-1; i++) {
  for (var j = 0; j <= n-1; j++) {
  	

    if (i==j){if(j===n) s += 1 ; else s+='1 ';}

    	 else {if(j===n) s += 0; else s+='0 '};

  
  }
  s += '\n';
}
return s;
}