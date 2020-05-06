window.onload = function() {
    const divElement = document.querySelector(".sticky-container");
    console.log("BOM: ",window)
    console.dir(document.querySelector("html"));
//divElement.classList.add('active')
    // divElement.addEventListener("click", function() {
    //     divElement.classList.toggle('active');
    // })
}

var count = 0;
function add() {
    console.log("I am adding");
}

function subtract() {
    console.log("I am subtracting");
}

var perryModule = (function() {
    var IIFECount = 0;
    // return {
    //     count: IIFECount
    // }
    return "good";
})();

var helper = function(n) {
    return function() {
    return n;
    }
    }
    

var funcs = [];
for (var i = 0; i < 10; i++) {
// funcs[i] = function() {
// return i;
// };
funcs[i] = helper(i);
}
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());