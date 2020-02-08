var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// ctx.font = "30px Hiragino Sans";
// ctx.fillStyle = "lightblue";
// ctx.fillText("Hello World", 100, 95);
// ctx.strokeStyle = "purple";
// ctx.strokeText("Hello World", 110, 100);

// var img = new Image();
// img.src = "image.jpg";
// img.id = "image";
// img.onload=function(){
// 	ctx.drawImage(img,100,100,960,539);
// }

var flower1 = new Image();
var flower2 = new Image();
var flower3 = new Image();
var flower4 = new Image();
var flower5 = new Image();
var flower6 = new Image();
var flower7 = new Image();
var flower8 = new Image();

flower1.src = "botanical.png";
flower2.src = "botanical (1).png";
flower3.src = "botanical (2).png";
flower4.src = "botanical (3).png";
flower5.src = "botanical (4).png";
flower6.src = "botanical (5).png";
flower7.src = "botanical (6).png";
flower8.src = "botanical (7).png";

flower1.onload=function(){
	ctx.drawImage(flower1,843,301,128,128);
}
flower2.onload=function(){
	ctx.drawImage(flower2,75,110,128,128);
}
flower3.onload=function(){
	ctx.drawImage(flower3,777,492,128,128);
}
flower4.onload=function(){
	ctx.drawImage(flower4,334,360,128,128);
}
flower5.onload=function(){
	ctx.drawImage(flower5,444,430,128,128);
}
flower6.onload=function(){
	ctx.drawImage(flower6,691,261,128,128);
}
flower7.onload=function(){
	ctx.drawImage(flower7,54,520,128,128);
}
flower8.onload=function(){
	ctx.drawImage(flower8,378,137,128,128);
}
