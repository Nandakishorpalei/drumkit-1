var number =document.querySelectorAll(".drum").length;
for(i=0 ; i< number;i++ ){
  switch(i){
    case 0:
  document.querySelectorAll(".drum")[i].addEventListener("click",handler);
  function handler(){
var audio=new Audio("crash.mp3");
audio.play();
  }
break;

  case 1:
  document.querySelectorAll(".drum")[i].addEventListener("click",handler1);
  function handler1(){
var audio1=new Audio("kick-bass.mp3");
audio1.play();
  }
break;

  case 2:
  document.querySelectorAll(".drum")[i].addEventListener("click",handler2);
  function handler2(){
var audio2=new Audio("snare.mp3");
audio2.play();
  }
break;

  case 3:
  document.querySelectorAll(".drum")[i].addEventListener("click",handler3);
  function handler3(){
var audio3=new Audio("tom-1.mp3");
audio3.play();
  }
break;

  case 4:
  document.querySelectorAll(".drum")[i].addEventListener("click",handler4);
  function handler4(){
var audio4=new Audio("tom-2.mp3");
audio4.play();
  }
break;

  case 5:
  document.querySelectorAll(".drum")[i].addEventListener("click",handler5);
  function handler5(){
var audio5=new Audio("tom-3.mp3");
audio5.play();
  }
break;

  case 6:
  document.querySelectorAll(".drum")[i].addEventListener("click",handler6);
  function handler6(){
var audio6=new Audio("tom-4.mp3");
audio6.play();
  }
  break;

 default:
 document.write("wrong input");
  }


  }
