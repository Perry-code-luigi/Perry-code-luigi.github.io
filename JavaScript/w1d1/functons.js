




function myfunc(arr){
 let sum=arr.reduce(function(current,item){
        return current+item;
    },0);
return sum;
}
console.log(myfunc.apply(myfunc.apply([1,1,1,1,1,1,1,1,1])));
