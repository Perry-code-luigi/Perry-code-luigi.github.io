window.onload = init;
var actionFrame = null;
var timer = null;
var counter = 0;
let start = null;
let stop = null;
let animation = null;
let fontsize = null;
let turbo = null;
let text = null;
let fontSize = [];
fontSize['Tiny'] = '7pt';
fontSize['Small'] = '10pt';
fontSize['Medium'] = '12pt';
fontSize['Large'] = '16pt';
fontSize['Extra Large'] = '24pt';
fontSize['XXL'] = '32pt';
function init() {
  start = document.getElementById("start");
  stop = document.getElementById("stop");
  animation = document.getElementById("animation");
  fontsize = document.getElementById("fontsize");
  turbo = document.getElementById("turbo");
  text = document.getElementById("text-area");

  start.onclick = startFun;
  stop.onclick = stopFun;
  animation.onchange = changeAnimiFun;
  fontsize.onchange = changeFontSize;
  turbo.onclick = turboFun;
}
function startFun() {
  start.disabled = true;
  stop.disabled = false;
  animation.disabled = true;


  if (timer === null) {
    if (turbo.checked) {
      timer = setInterval(function () {
        if (counter < actionFrame.length) {
            text.value = actionFrame[counter];
          counter++;
        } else {
            text.value = actionFrame[0];
          counter = 1;
        }
      }, 50);
    } else {
      timer = setInterval(function () {
        console.log(
          "countrt: ",
          counter,
          "conditino: ",
          counter < actionFrame.length
        );
        if (counter < actionFrame.length) {
          text.value = actionFrame[counter];
          counter++;
          console.log("2nd" + counter);
        } else {
          text.value = actionFrame[0];
          counter = 1;
          console.log("3nd" + counter);
        }
      }, 250);
    }
  }
}
function stopFun() {
  start.disabled = false;
  stop.disabled = true;
  animation.disabled = false;
  clearInterval(timer);
  timer = null;
}
function changeAnimiFun(event) {
    
  var whichOne = event.target.value;
  actionFrame = ANIMATIONS[whichOne].split("=====\n");
  text.value = actionFrame[0];
  counter = 0;
}
function changeFontSize() {

   text.style.fontSize = fontSize[this.value]
}
function turboFun(){
    if(timer !== null){
        if (event.target.checked) {
            clearInterval(timer);
            timer = setInterval(function () {
                if (counter < actionFrame.length) {
                    text.value= actionFrame[counter];
                    counter++;
                } else {
                    text.value = actionFrame[0];
                    counter = 1;
                }
            }, 50);
        } else {
            clearInterval(timer);
            timer = setInterval(function () {
                if (counter < actionFrame.length) {
                    text.value = actionFrame[counter];
                    counter++;
                } else {
                    text.value = actionFrame[0];
                    counter = 1;
                }
            }, 250);
        }
    }
}  

