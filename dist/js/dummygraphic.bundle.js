!function(e){function n(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r={};n.m=e,n.c=r,n.d=function(e,r,o){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=302)}({302:function(e,n,r){"use strict";var o=r(303),a={type:"pie",data:{datasets:[{data:[o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger()],backgroundColor:[o.RandomGenerator.randomColor(),o.RandomGenerator.randomColor(),o.RandomGenerator.randomColor(),o.RandomGenerator.randomColor(),o.RandomGenerator.randomColor()],label:"Dataset 1"}],labels:["Red","Orange","Yellow","Green","Blue"]},options:{responsive:!0}},t=document.getElementById("pieChart").getContext("2d"),d={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Dataset 1",backgroundColor:o.RandomGenerator.randomColor(),data:[o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger()]},{label:"Dataset 2",backgroundColor:o.RandomGenerator.randomColor(),data:[o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger(),o.RandomGenerator.randomInteger()]}]},m=document.getElementById("barChart").getContext("2d");window.myPie=new Chart(t,a),window.myBar=new Chart(m,{responsive:!0,type:"bar",data:d,options:{responsive:!0,legend:{position:"top"},title:{display:!0,text:"Chart.js Bar Chart"}}})},303:function(e,n,r){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,r,o){return r&&e(n.prototype,r),o&&e(n,o),n}}();n.RandomGenerator=function(){function e(){o(this,e)}return a(e,null,[{key:"randomInteger",value:function(){return Math.ceil(100*Math.random())}},{key:"randomRange",value:function(e,n){return Math.floor(Math.random()*(n-e+1))+e}},{key:"randomColor",value:function(){return"rgb("+this.randomRange(1,255)+","+this.randomRange(1,255)+","+this.randomRange(1,255)+")"}}]),e}()}});