
function myFunctionTest(expected, found) {
    console.assert(expected === found, {expected: expected, found: found, errorMsg: "the found value is not equal to the expected one"});
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }



function sum(arr){

return arr.reduce(function(current,item){
    return current+item;
},0);
}
function multiply(arr){
    return arr.reduce(function(current,item){
    return current*item;
    },1);
}
function reverse(str){
    return str.split("").reduce((rev, char)=> char + rev, ''); 

}



// console.log("Expected sum output for arr[2,2,3]: 6\n" + myFunctionTest(sum([2,2,3]), 7));
// console.log("Expected sum output for arr[2,2,3]: 6\n" + myFunctionTest(sum([2,2,3]), 3));
// console.log("Expected multiply output for arr[2,2,3]: 12\n" + myFunctionTest(multiply([2,2,3]), 12));
// console.log("Expected multiply output for arr[2,2,3]: 12\n" + myFunctionTest(multiply([2,2,3]), 7));
console.log("Expected reverse result for perry: yrrep\n" + myFunctionTest(reverse("perry"), "yrrep"));
console.log("Expected reverse result for perry: yrrep\n" + myFunctionTest(reverse("perry"), "rep"));