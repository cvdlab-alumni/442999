var s='\n';
var r=10;
var c=10;
for (var i=1; i<=r; i++){
for (var j=1; j<=c; j++){
	if (j==c) s +=i*j + '\t'; else
	s +=i*j +',' + '\t'; 

}
s += '\n';
}
console.log(s);