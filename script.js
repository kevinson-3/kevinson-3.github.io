const cont2 = document.getElementById("cont2");
const scopeMatch = document.getElementById("scopeDiv");

// img.onload = function() {
//     // scopeMatch.setAttribute("style","width:".concat(img.clientWidth.concat("px")));
//     alert(this.width + 'x' + this.height);
//     // getElementById('div_register').style.width
// }

// scopeMatch.setAttribute("style","width:".concat(img.clientWidth.concat("px")));
// window.onload = resizeScopeDiv;
window.addEventListener("resize", resizeScopeDiv);

var scopeW = 0, scopeH = 0, scopeL = 0;
var newStyle, constStyle = "position:absolute;top:0px;"
var img = document.getElementById("scope");
var style;

function mainFunc(){
    resizeScopeDiv();
}

function resizeScopeDiv() {
    img = document.getElementById("scope");
    scopeW = img.clientWidth;
    scopeH = img.clientHeight;
    style = img.currentStyle || window.getComputedStyle(img);

    scopeL = style.marginLeft;
    
    // uncomment for debug number
    // document.getElementById("boxBoy").innerHTML = scopeL;
    
    // update div box dimensions
    newStyle = constStyle + "width:" +// "left:" + scopeL + "px;width:" + 
        scopeW + "px; height:" + scopeH + "px;margin-left:" + scopeL + ";"//px;";
    document.getElementById("scopeDiv").setAttribute("style", newStyle);

}

function show_page(window) {
    var x = document.getElementById(window);
    var y = document.getElementById("scope");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.src ="assets/verascopeSquareBlank.png";
        var all_blockButtons = document.getElementsByClassName("buttonDiv");
        for (let i = 0; i < all_blockButtons.length; i++) {
            all_blockButtons[i].style.display = "none";
        }
    } else {
        x.style.display = "none";
        y.src ="assets/verascopeSquare.png";
        var all_blockButtons = document.getElementsByClassName("buttonDiv");
        for (let i = 0; i < all_blockButtons.length; i++) {
            all_blockButtons[i].style.display = "block";
        }
    }
}

