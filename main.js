canvas= document.getElementById("mycanvas");
color= "blue";
color_1="black";
color_2="green";
color_3="yellow";
color_4= "red";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 5;
ctx.arc(250, 210, 40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= color_1;
ctx.lineWidth= 5;
ctx.arc(350, 210, 40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= color_4;
ctx.lineWidth= 5;
ctx.arc(450, 210, 40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= color_3;
ctx.lineWidth= 5;
ctx.arc(300, 250, 40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= color_2;
ctx.lineWidth= 5;
ctx.arc(400, 250, 40,0,2*Math.PI);
ctx.stroke();