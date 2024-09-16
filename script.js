var ImgBox = document.querySelector(".img-box");
var Imgwrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");

originalImg.style.width = ImgBox.offsetWidth + "px";

var leftSpace = ImgBox.offsetLeft;
ImgBox.onmousemove = function (e) {
    var boxWidth = (e.pageX - leftSpace) + "px";
    Imgwrap.style.width = boxWidth;
    line.style.left = boxWidth;
};

ImgBox.style.backgroundImage = "none";
