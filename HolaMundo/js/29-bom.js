'use strict'

//BOM - Browser Object Model
function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
    console.log(window.location.href);
}

function redirect(url){
    window.location.href= url;
}

getBom();