




function myfunc(arr){

return arr.reduce(function(current,item){
    return current+item;
},0);
}
let arr=[1,1,1,1,1,1,1,1,1];

console.log(myfunc.apply(myfunc.apply(arr)));
