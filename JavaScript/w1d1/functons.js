
function myFunctionTest(expected, found) {
    console.assert(expected === found, {expected: expected, found: found, errorMsg: "the found value is not equal to the expected one"});
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }


/* takes one array and simplifies it into a single number*/
function sum(arr){

return arr.reduce(function(current,item){
    return current+item;
},0);
}

/* takes one array and simplifies it into a single number*/
function multiply(arr){
    return arr.reduce(function(current,item){
    return current*item;
    },1);
}

/* takes one string and it reverses it*/
function reverse(str){
    return [...str].reduce((rev, char)=> char + rev, ''); 

}
/* takes i and an array of filters all the elememts length that are longer than i*/
function filterLongWords(str,i){
    return JSON.stringify(str.filter(function(word){
        return word.length > i;
    }
    ));
}



console.log("Expected sum output for arr[2,2,3]: 6\n" + myFunctionTest(sum([2,2,3]), 7));
console.log("Expected sum output for arr[2,2,3]: 6\n" + myFunctionTest(sum([2,2,3]), 3));
console.log("Expected multiply output for arr[2,2,3]: 12\n" + myFunctionTest(multiply([2,2,3]), 12));
console.log("Expected multiply output for arr[2,2,3]: 12\n" + myFunctionTest(multiply([2,2,3]), 7));
console.log("Expected reverse result for perry: yrrep\n" + myFunctionTest(reverse("perry"), "yrrep"));
console.log("Expected reverse result for perry: yrrep\n" + myFunctionTest(reverse("perry"), "rep"));
console.log("Expected word length greater than 3 inside ['bird','dog','monkey']: ['bird','monkey']\n" + myFunctionTest(filterLongWords(['bird','dog','monkey'],3), JSON.stringify(['bird','monkey'])));
console.log("Expected word length greater than 3 inside ['bird','dog','monkey']: ['bird','monkey']\n" + myFunctionTest(filterLongWords(['bird','dog','monkey'],3), JSON.stringify(['aaa','bbb'])));
