//CPEN 400A JavaScript Quiz Solutions
//Implement your solutions here
 
//Name:
//Student#:
 
 
//Question #1
function caseInsensitiveStringSearch( strArr, str ) {
	
 for(var i=0;i<strArr.length;i++){
	 if(strArr[i].toLowerCase()===str.toLowerCase())
		 return i;
 }
	return -1; 
 }

 

 
//Question #2
function lowerCaseEmails( userEmails ) {

for(var i=0;i<userEmails.length;i++){
	 if(userEmails[i].email!==undefined){
	 userEmails[i].email=userEmails[i].email.toLowerCase();
	 }
	 else return "missing";
}
 return userEmails;

}
 

 
//Question #3
function tenSortedIntegers() {
 var arr=[];
 for (var i=0; i<10;i++){
	 arr.push(parseInt(Math.random()*49+1));
 }
 return arr.sort(function(x,y){
	 return y-x;
 });

}
 
//Question #4
function combineArrays( arrA, arrB ) { 
  var arrC=[];
  var longArr=[];
  var minlen;
  if(arrA.length>arrB.length){
	  minlen=arrB.length;
     longArr=arrA;
  }
  else {
	  minlen=arrA.length;
	  longArr=arrB;
  }
 for(var i=0;i<minlen;i++){
		 arrC.push(arrA[i]);
         arrC.push(arrB[i]);
}
 return arrC.concat(longArr.slice(minlen));

}
 
//Question #5
function concatAllStringSubsets ( str ) {
	var substrArr=[];
    for(i=0;i<=str.length;i++){
	   for(j=i;j<=str.length;j++){
	  substrArr.push(str.substring(i,j));
	   }
	}
	var newArr=[];
	for(var i in substrArr){
		if(newArr.indexOf(substrArr[i])==-1)
			newArr.push(substrArr[i]);
	}
  newArr.sort();
  return  newArr.join('');
}