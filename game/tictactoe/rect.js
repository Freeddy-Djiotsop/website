let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let width = 400;
let height = 400;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.background = "#ff8";
context.fillStyle = "black";
//context.fillRect(0, 0, width,height);
context.fillStyle = "red";
context.fillRect(200,66,4,4);
//context.fillStyle = "black";

class OneArray
{
    
    constructor(context,character,x,y,w,h,id)
    {
        this.context = context;
        this.character = character;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.xmiddle = x + (this.width/2)-2;
        this.ymiddle = y + (this.height/2)-2;
        this.radius = 65;
        this.id = id;
    }
    
    draw()
    {
        console.log('this draw');
        this.context.fillStyle = "black";
        this.context.fillRect(this.x, this.y, this.width-5, this.height-5);
    }
    
    drawPunkt()
    {
        this.context.fillStyle = "red";
        this.context.fillRect(this.xmiddle, this.ymiddle, 2, 2);//draw punkt
//        console.log(this.id+': '+this.xmiddle+', '+this.ymiddle);
        this.context.beginPath();//Draw circle
        this.context.strokeStyle = "blue";
        this.context.arc(this.xmiddle, this.ymiddle, this.radius, 0, Math.PI*2, true);
        this.context.stroke();
        this.context.closePath();
    }
    
    update(currentPlayer)
    {
        if(this.character==='')
        {
            this.character = currentPlayer;
        }
    }
    
    clicked(x,y)
    {
        const distance = Math.sqrt( ( (x - this.xmiddle) * (x - this.xmiddle) ) + ( (y - this.ymiddle) * (y - this.ymiddle) ) );
        if(distance < this.radius)
            console.log(this.id+': '+this.xmiddle+', '+this.ymiddle+'--> '+distance);
    }
}

let map = [];

function draw()
{
    
    let w = width/3;
    let h = height/3;
    
    let index = -1;
    for(let i=0; i<3; i++)
    {
        for(let j=0; j<3; j++)
        {
            let x = w*i + w/2;
            let y = h*j + h/2;
            index++;
            map.push(new OneArray(context,''+(i+j),x,y,w,h,index+1));
            map[index].draw();
            map[index].drawPunkt();
            
        }
    }
    console.log('apres draw');
    console.log(map);
}

function mousePressed(event)
{
    const rect = canvas.getBoundingClientRect();
    const xmouse = event.clientX - rect.left;
    const ymouse = event.clientY - rect.top;
     for(let i=0; i<map.length; i++)
        map[i].clicked(xmouse,ymouse);
}

canvas.addEventListener('click', mousePressed);
draw();