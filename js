// JavaScript Document
// Code for moving toolbar appering on page

var pagetop, menu, yPos; // variable deffinition 

function yScroll(){  // function for y scroll

pagetop = document.getElementById('pagetop'); // variabl assignment relative to html id
menu = document.getElementById('menu'); // variabl assignment relative to html id

yPos = window.pageYOffset; // variabl assignment as number of pixels that the document has already been scrolled

if(yPos > 155){ // changes in style if condition is met
	pagetop.style.height = "36px"; // height change
	pagetop.style.paddingTop = "8px"; // padding applied at the top of page
	menu.style.height = "0px"; } // hieght change

else { //  changes in style if condition is not met
	pagetop.style.height = "3px"; 
	pagetop.style.paddingTop = "36px"; 
	menu.style.height = "50px"; } 
} 

window.addEventListener("scroll", yScroll); // when a window is scrolled this method will execute
