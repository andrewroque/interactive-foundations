// alert("I am an alert box!");


$(document).ready(function(){


     // random order
     var buttons = $('.button');

     console.log(buttons);
     for(var i = 0; i < buttons.length; i++){
     	var target = Math.floor(Math.random() * buttons.length -1) + 1;
     	var target2 = Math.floor(Math.random() * buttons.length -1) +1;
     	buttons.eq(target).before(buttons.eq(target2));
     }	


 });