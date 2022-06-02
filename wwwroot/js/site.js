// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets
// Write your JavaScrip
function sample1(s) {
    const colarr = ["red", "green", "black", "yellow", "gold", "darkorange"];
    console.log("Array before : " + colarr);
    console.log("Array Size"+colarr.length);
    colarr.pop(s);
    console.log("Array after : " + colarr);
    console.log("Array Size" + colarr.length);
    var n = Math.floor(Math.random(0, colarr.length - 1));
    console.log("Random number " + n);
    document.getElementById("samp").style.color = colarr[n];
}