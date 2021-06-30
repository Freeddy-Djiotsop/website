let canvas = document.getElementById("canvas");
let resultat = document.getElementById("resultat");
let context = canvas.getContext("2d");

let winnerDiv = document.getElementById('winner-div');
winnerDiv.addEventListener('click', restart);
document.getElementById('game-over-text').addEventListener('click', restart);

class FillWithTictactoe
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
    
    draw(context)
    {
        
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = '#FF6D00';
        context.font = 'bold 20px serif';
        context.textAlign = "center";
        context.textBaseline = "middle";
//        context.fillText(this.text, this.xpos, this.ypos);
        context.strokeText('tic-tac-toe', this.x, this.y);
        
        context.stroke();
        context.closePath()
    }
}

function restart()
{
    for(var i=0; i<map.length; i++)
        map[i].restart();
    currentPlayer = players[0];
    iterator = 1;
    winn = false;
    tie = false;
    winner = '';
    checkBoard = [];
}

let restartbtn = document.getElementById("restart");
restartbtn.addEventListener('click', ()=>
{
    restart();
    document.getElementById('continue').classList.add('visible');
});

let width = 400;
let height = 400;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let map = [];

let boardFill =
[
    [['X',1], ['O',2], ['X',3]],
    [['O',4], ['X',5], ['X',6]],
    [['X',7], ['X',8], ['O',9]]
];

let emptyBoard =
[
    [['',1], ['',2], ['',3]],
    [['',4], ['',5], ['',6]],
    [['',7], ['',8], ['',9]]
];

let boardFill2 =
[
    ['X', 'X', 'X'],
    ['X', 'O', 'X'],
    ['X', 'X', 'O']
];

let emptyBoard2 =
[
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let board = emptyBoard;
let checkBoard = [];

let players = ['X', 'O'];
let currentPlayer = players[0];
let iterator = 1;
let winn = false;//If someone wont
let tie = false;
let winner = '';

class OneArray
{
    
    constructor(context,character,x,y,w,h,id)
    {
        this.context = context;
        this.character = character;
        this.x = x;
        this.y = y;
        this.width = w-5;
        this.height = h-5;
        this.xmiddle = x + (this.width/2)-2;
        this.ymiddle = y + (this.height/2)-2;
        this.radius = 65;
        this.id = id;
    }
    
    drawSquare()
    {
        if(this.id%2==1) this.context.fillStyle = "#fff";
        else this.context.fillStyle = "blue";
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }
    
    drawPunkt()
    {
        this.context.fillStyle = "red";
        this.context.fillRect(this.xmiddle, this.ymiddle, 2, 2);//draw punkt
        this.context.fillStyle = "green";
        this.context.fillText(this.id,this.xmiddle,this.ymiddle,20);
//        console.log(this.id+': '+this.xmiddle+', '+this.ymiddle);
        this.context.beginPath();//Draw circle
        this.context.strokeStyle = "blue";
        this.context.arc(this.xmiddle, this.ymiddle, this.radius, 0, Math.PI*2, true);
        this.context.stroke();
        this.context.closePath();
    }
    
    drawCharacter()
    {
        this.context.strokeStyle = "#0b0c22";
        if(this.character!=='')
        {
            if(this.character==='X')
            {
                this.context.strokeStyle = "FF6D00";
//                drawEllipse(this.context,this.xmiddle,this.ymiddle,40);
                drawCross(this.context,this.x+10, this.y+15,this.xmiddle+50,this.ymiddle+50);
                drawCross(this.context,this.x+120, this.y+15,this.xmiddle-50, this.ymiddle+50);
            }
            else if(this.character==='O')
                drawEllipse(this.context,this.xmiddle,this.ymiddle,40);
        }
    }
    
    updateCharacter()
    {
        this.character = currentPlayer;
        checkBoard[this.id-1] = this.character;
        this.drawCharacter();
    }
    
    clicked(x,y)
    {
        const distance = Math.sqrt( ( (x - this.xmiddle) * (x - this.xmiddle) ) + ( (y - this.ymiddle) * (y - this.ymiddle) ) );
        console.log(distance);
        if(distance < this.radius)
        {
            if(this.character==='')
            {
                this.updateCharacter();
                checkForWinner();
                if(!winn) nextTurn();
                else
                {
                    document.getElementById('winner-text').innerText = 'winner is '+this.character;
                    winnerDiv.classList.add('visible');
//                    document.getElementsByClassName('overlay-text-small').add('visible');
                }
            }
        }
    }
    
    restart()
    {
        this.drawSquare();
        this.drawPunkt();
        this.character = '';
    }
}



function nextTurn()
{
    
    if(iterator<10)
    {
        console.log(checkBoard);
        iterator++;
        if(iterator%2==1)
            currentPlayer = players[0];
        else if(iterator%2==0)
            currentPlayer = players[1];
    }
    
}

function checkForWinner()
{
    if(!winn&&!tie&&iterator!==10)
    {
        //for the Zeile/rows
        checkRows();

        //for the Spalte/columns
        checkColumns();

        //For Diagonal
        checkDiagonal();

        //For Anti-Diagonal
        checkAntidiagonal();
    }
}

function checkColumns()
{
    for(let i=0; i<3; i++)
    {
        console.log(i+'. Columns: '+checkBoard[i]+', '+checkBoard[i+3]+', '+checkBoard[i+6]);
        if(checkBoard[i]!==undefined&&checkBoard[i]==checkBoard[i+3]&&checkBoard[i]==checkBoard[i+6])
        {
            winn = true;
            if(checkBoard[i]==players[0])
                console.log(players[0]+' ist The Winner columns');
            else if(checkBoard[i]==players[1])
                console.log(players[1]+' ist The Winner columns');
        }
    }
}

function checkRows()
{
    for(let i=0; i<checkBoard.length; i+=3)
    {
        console.log(i+'. Rows: '+checkBoard[i]+', '+checkBoard[i+1]+', '+checkBoard[i+2]);
        if(checkBoard[i]!==undefined&&checkBoard[i]==checkBoard[i+1]&&checkBoard[i]==checkBoard[i+2])
        {
            winn = true;
            if(checkBoard[i]==players[0])
                console.log(players[0]+' ist The Winner rows');
            else if(checkBoard[i]==players[1])
                console.log(players[1]+' ist The Winner rows');
        }
    }
}

function checkDiagonal()
{
    console.log('Diagonal: '+checkBoard[0]+', '+checkBoard[4]+', '+checkBoard[8]);
    if(checkBoard[0]!==undefined&&checkBoard[0]==checkBoard[4]&&checkBoard[0]==checkBoard[8])
    {
        winn = true;
        if(checkBoard[0]==players[0])
            console.log(players[0]+' ist The Winner Diagonal');
        else if(checkBoard[0]==players[1])
            console.log(players[1]+' ist The Winner Diagonal');
    }
}

function checkAntidiagonal()
{
    console.log('Anti Diagonal: '+checkBoard[2]+', '+checkBoard[4]+', '+checkBoard[6]);
    if(checkBoard[2]!==undefined&&checkBoard[2]==checkBoard[4]&&checkBoard[2]==checkBoard[6])
    {
        winn = true;
        if(checkBoard[2]==players[0])
            console.log(players[0]+' ist The Winner Anti Diagonal');
        else if(checkBoard[2]==players[1])
            console.log(players[1]+' ist The Winner Anti Diagonal');
    }
}

function draw2()
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

function draw1()
{
    
    let w = width/3;
    let h = height/3;
    
    context.strokeStyle = "white";
    drawMap(w,h,width,height);
    let index = -1;
    for(let i=0; i<3; i++)
    {
        for(let j=0; j<3; j++)
        {
            let x = w*i + w/2;
            let y = h*j + h/2;
            console.log(board[i][j][0]);
            index++;
            fillMap(board[i][j],x,y,w,h,index);
        }
    }
    console.log('apres draw');
    console.log(map);
}

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
            map.push(new OneArray(context,board[j][i][0],x,y,w,h,board[j][i][1]));
            map[index].drawSquare();
            map[index].drawPunkt();
            map[index].drawCharacter();
            
        }
    }
}

function drawEllipse(x,y,w)
{
    context.beginPath();
    context.lineWidth = 2;
    context.arc(x, y, w, 0, Math.PI * 2, false);
//    context.ellipse(x,y,w);
    context.stroke();
    context.closePath()

    
}

function drawEllipse(context,x,y,w)
{
    context.beginPath();
    context.lineWidth = 2;
    context.arc(x, y, w, 0, Math.PI * 2, false);
//    context.ellipse(x,y,w);
    context.stroke();
    context.closePath()

    
}

function drawCross(x,y,w,h)
{
    console.log('cross');
    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(x, y);
    context.lineTo(w, h);
    context.stroke();
    context.closePath()
}

function drawCross(context, x,y,w,h)
{
    console.log('cross');
    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(x, y);
    context.lineTo(w, h);
    context.stroke();
    context.closePath()
}

function drawLine(x,y,w,h)
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

function fillMap(array,x,y,w,h,i)
{
    map.push(new OneArray(context,array[0],x,y,w,h,array[1]));
    map[i].draw(context);
    context.strokeStyle = "white";
    if(array[0] == players[1])
    {
         ellipse(x,y,w/3);
    }
    else if(array[0] == players[0])
    {
        let xr = w/4;
        cross(x-xr,y-xr,x+xr,y+xr);
        cross(x+xr,y-xr,x-xr,y+xr);
    }
}

function mousePressed(event)
{
    const rect = canvas.getBoundingClientRect();
    const xmouse = event.clientX - rect.left;
    const ymouse = event.clientY - rect.top;
    if(iterator<10)
       for(let i=0; i<map.length; i++)
            map[i].clicked(xmouse,ymouse);
    if(iterator==10) document.getElementById('game-over-text').classList.add('visible');
        
}

canvas.addEventListener('click', mousePressed);

(function()
{
    let m = 10;
    let w = window.innerWidth;
    w -= m+1;
    let h = window.innerHeight;
//    h -= m+1;
    let context = document.getElementById('tictatoe-area').getContext('2d');
    context.beginPath();
//    context.lineWidth = 1;
    context.strokeStyle = '#FF6D00';
    context.font = ' 20px normal';
    context.textAlign = "center";
    context.textBaseline = "middle";
    for(var i =0; i<500; i++)
        context.strokeText('tic-tac-toe', (Math.floor(Math.random() * w)) , (Math.floor(Math.random() * h)));
    context.stroke();
    context.closePath()
    draw();
})();
//console.log(board);