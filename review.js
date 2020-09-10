function user() {

   document.querySelector('#one').onclick = function() {
       clear();
       one();
   };

   document.querySelector('#two').onclick = function() {
       clear()
       one();
       two();
   };

   document.querySelector('#three').onclick = function() {
       clear();
       one();
       two();
       three();
   };

   document.querySelector('#four').onclick = function() {
       clear();
       one();
       two();
       three();
       four();
   };

   document.querySelector('#five').onclick = function() {
       clear();
       one();
       two();
       three();
       four();
       five();
   };

}

function one() {
    document.querySelector('#one').style.color = "gold";
    document.querySelector('#one').innerHTML = "★";
}

function two() {
    document.querySelector('#two').style.color = "gold";
    document.querySelector('#two').innerHTML = "★";
}

function three() {
    document.querySelector('#three').style.color = "gold";
    document.querySelector('#three').innerHTML = "★";
}

function four() {
    document.querySelector('#four').style.color = "gold";
    document.querySelector('#four').innerHTML = "★";
}

function five() {
    document.querySelector('#five').style.color = "gold";
    document.querySelector('#five').innerHTML = "★";
}

function clear() {
    document.querySelector('#one').style.color = "black";
    document.querySelector('#one').innerHTML = "☆";
    document.querySelector('#two').style.color = "black";
    document.querySelector('#two').innerHTML = "☆";
    document.querySelector('#three').style.color = "black";
    document.querySelector('#three').innerHTML = "☆";
    document.querySelector('#four').style.color = "black";
    document.querySelector('#four').innerHTML = "☆";
    document.querySelector('#five').style.color = "black";
    document.querySelector('#five').innerHTML = "☆";
}