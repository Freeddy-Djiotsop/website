let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;

canvas.width = width;
canvas.height = height;

canvas.style.background = "#ff0";

//context.fillRect(0, 200, 600,600);


class Circle
{
    constructor(xpos, ypos, radius, color, text)
    {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.text = text;
    }
    
    draw(context)
    {
        
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = this.color;
        context.font = "20px Arial;";
        context.textAlign = "center";
        context.textBaseline = "middle";
//        context.fillText(this.text, this.xpos, this.ypos);
        context.strokeText(this.text, this.xpos, this.ypos);
        
        context.lineWidth = 5;
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath()
    }
}

let circlecounter = 1;
let allCircle = [];
let drawCircle = function(circle)
{
    circle.draw(context);
}
for(let i =0; i<10; i++)
{
    let x = Math.random() * width;
    let y = Math.random() * height;
    
    allCircle.push(new Circle(x, y, 50, "black", "X"));
    drawCircle(allCircle[i]);
}