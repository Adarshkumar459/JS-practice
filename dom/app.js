let btn = document.querySelector("button");
console.dir(btn);
btn.onclick=function(){
    console.log("button is click");
    // alert("clicked");
};
btn.onmouseenter=function(){
    console.log("button is click");
    alert("clicked");
};