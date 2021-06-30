let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let width = 400;
let height = 400;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.background = "#ff8";
context.fillStyle = "black";
context.fillRect(0, 0, width,height);


let boardFill =
[
    ['X', 'X', 'X'],
    ['X', 'O', 'X'],
    ['X', 'X', 'O']
];

let emptyBoard =
[
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let board = emptyBoard;

let players = ['X', 'O'];
let currentPlayer;
let available = [];

function setup()
{
//    createCanvas(400,400);
    currentPlayer = floor(random(players.length));
    for(let i=0; i<3; i++)
    {
        for(let j=0; j<3; j++)
        {
            available.push([i,j]);
        }
    }
//    if(random(1) < 0.5 )
//    {
//        currentPlayer = players[0];
//    }
//    else
//    {
//        currentPlayer = players[1];
//    }
}

function nextTurn()
{
    let index = Math.random(available.length);
    let spot = available.splice(index,1)[0];
    let i = spot[0];
    let j = spot[1];
    board[i][j] = players[currentPlayer];
    currentPlayer = (currentPlayer+1) % players.length;
}

function mousePressed()
{
    console.log('Pressed')
//    nextTurn();
}

function createCanvas(width,height);
{
    
}

function draw()
{
    
    let w = width/3;
    let h = height/3;
    
    context.strokeStyle = "white";
    drawMap(w,h,width,height);
    
    for(let i=0; i<3; i++)
    {
        for(let j=0; j<3; j++)
        {
            let x = w*i + w/2;
            let y = h*j + h/2;
            let spot = board[i][j];
            fillMap(spot,x,y,w);
        }
    }
}

let text = function(spot, x, y)
{
//    console.log('Dans text');
    context.beginPath();
    context.strokeText(spot, x, y);
//    context.font = "32px Arial";
//    context.fillText(spot, x, y);
    context.stroke();
    context.closePath();
}

function ellipse(x,y,w)
{
    context.beginPath();
    context.lineWidth = 2;
    context.arc(x, y, w, 0, Math.PI * 2, false);
//    context.ellipse(x,y,w);
    context.stroke();
    context.closePath()

    
}

function cross(x,y,w,h)
{
    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(x, y);
    context.lineTo(w, h);
    context.stroke();
    context.closePath()
}

function line(x,y,w,h)
{
    context.beginPath();
    context.lineWidth = 4;
    context.moveTo(x, y);
    context.lineTo(w, h);
    context.stroke();
    context.closePath()
}

function drawMap(w,h,width,height)
{
    line(w,0,w,height);
    line(w*2,0,w*2,height);
    line(0,h,width,h);
    line(0,h*2,width,h*2);
}

function fillMap(spot,x,y,w)
{
    if(spot == players[1])
    {
         ellipse(x,y,w/3);
    }
    else if(spot == players[0])
    {
        let xr = w/4;
        cross(x-xr,y-xr,x+xr,y+xr);
        cross(x+xr,y-xr,x-xr,y+xr);
    }
}

canvas.addEventListener('click', mousePressed);
draw();
//console.log(board);






/*
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let width = 400;
let height = 400;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.background = "#ff8";
context.fillStyle = "black";
context.fillRect(0, 0, width,height);


let boardFill =
[
    ['X', 'X', 'X'],
    ['X', 'O', 'X'],
    ['X', 'X', 'O']
];

let emptyBoard =
[
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let board = boardFill;

let players = ['X', 'O'];

function draw()
{
    
    let w = width/3;
    let h = height/3;
    
    context.strokeStyle = "white";
    drawMap(w,h,width,height);
    
    for(let i=0; i<3; i++)
    {
        for(let j=0; j<3; j++)
        {
            let x = w*i + w/2;
            let y = h*j + h/2;
            let spot = board[i][j];
            fillMap(spot,x,y,w);
        }
    }
}

let text = function(spot, x, y)
{
//    console.log('Dans text');
    context.beginPath();
    context.strokeText(spot, x, y);
//    context.font = "32px Arial";
//    context.fillText(spot, x, y);
    context.stroke();
    context.closePath();
}

function ellipse(x,y,w)
{
    context.beginPath();
    context.lineWidth = 2;
    context.arc(x, y, w, 0, Math.PI * 2, false);
//    context.ellipse(x,y,w);
    context.stroke();
    context.closePath()

    
}

function cross(x,y,w,h)
{
    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(x, y);
    context.lineTo(w, h);
    context.stroke();
    context.closePath()
}

function line(x,y,w,h)
{
    context.beginPath();
    context.lineWidth = 4;
    context.moveTo(x, y);
    context.lineTo(w, h);
    context.stroke();
    context.closePath()
}

function drawMap(w,h,width,height)
{
    line(w,0,w,height);
    line(w*2,0,w*2,height);
    line(0,h,width,h);
    line(0,h*2,width,h*2);
}

function fillMap(spot,x,y,w)
{
    if(spot == players[1])
    {
         ellipse(x,y,w/3);
    }
    else if(spot == players[0])
    {
        let xr = w/4;
        cross(x-xr,y-xr,x+xr,y+xr);
        cross(x+xr,y-xr,x-xr,y+xr);
    }
}

draw();
//console.log(board);
*/