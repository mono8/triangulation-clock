import {TimelineMax, Elastic, Power2, Back} from 'gsap';
import {n1, n2, n3, n4, n5, n6, n7, n8, n9, n0} from './data';

var canvas1 = document.querySelector('#canvas1');
var ctx1 = canvas1.getContext('2d');
var canvas2 = document.querySelector('#canvas2');
var ctx2 = canvas2.getContext('2d');
var canvas3 = document.querySelector('#canvas3');
var ctx3 = canvas3.getContext('2d');
var canvas4 = document.querySelector('#canvas4');
var ctx4 = canvas4.getContext('2d');
var canvas5 = document.querySelector('#canvas5');
var ctx5 = canvas5.getContext('2d');
var canvas6 = document.querySelector('#canvas6');
var ctx6 = canvas6.getContext('2d');
let tl1 = new TimelineMax(), 
  tl2 = new TimelineMax(),
  tl3 = new TimelineMax(), 
  tl4 = new TimelineMax(), 
  tl5 = new TimelineMax(), 
  tl6 = new TimelineMax();

let numbArr = [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9];
let numbers = {};
let maxLengthArr = Math.max(...(numbArr.map(el => el.length)));

var padArray = function(arr, len, fill) {
  return arr.concat(Array(len).fill(fill)).slice(0,len);
};

for (let i = 0; i < numbArr.length; i++) {
  numbers[i]=padArray(numbArr[i], maxLengthArr, 70);
}

function getSuperstate(number) {
  return JSON.parse(JSON.stringify(numbers[number]));
}

function getTime() {
  let date = new Date();
  let seconds = date.getSeconds().toString().split('');
  let hours = date.getHours().toString().split('');
  let minutes = date.getMinutes().toString().split('');
  [hours, minutes, seconds].forEach(el => {
    if (el.length === 1) {
      el.unshift('0');
    }
  })
  return hours.concat(minutes.concat(seconds));
}

function numbRend(timeline, context, superstate, timePart) {
  let current = getTime()[timePart];
  let state = JSON.parse(JSON.stringify(numbers[current]));

  state.onUpdate = function() {
    render(superstate, context);
  };
  state.onComplete = function() {
    numbRend(timeline, context, state, timePart);
  };
  
  timeline.to(superstate, 1, state);
}

function render(arr, context) {
  context.clearRect(0, 0, 155, 282);
  for (let i =0; i<arr.length; i=i+6) {
    context.beginPath();
    context.moveTo(arr[i], arr[i+1]);
    context.lineTo(arr[i+2], arr[i+3]); 
    context.lineTo(arr[i+4], arr[i+5]); 
    context.closePath();

    context.lineWidth = 1;
    context.strokeStyle = '#405262';
    context.fillStyle = '#50677b';
    context.fill();
    context.stroke();
  }
}

window.onload = function() {
  numbRend(tl1, ctx1, getSuperstate(getTime()[0]), 0); 
  numbRend(tl2, ctx2, getSuperstate(getTime()[1]), 1); 
  numbRend(tl3, ctx3, getSuperstate(getTime()[2]), 2); 
  numbRend(tl4, ctx4, getSuperstate(getTime()[3]), 3); 
  numbRend(tl5, ctx5, getSuperstate(getTime()[4]), 4); 
  numbRend(tl6, ctx6, getSuperstate(getTime()[5]), 5); 
};