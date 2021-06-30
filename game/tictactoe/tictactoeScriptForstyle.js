class AudioController
{
    constructor()
    {
        this.bgMusic = new Audio('Assets/Audio/creepy.mp3');
        this.firstPlayerSound = new Audio('Assets/Audio/flip.wav');
        this.secondPlayerSound = new Audio('Assets/Audio/match.wav');
        this.victorySound = new Audio('Assets/Audio/victory.wav');
        this.gameOverSound = new Audio('Assets/Audio/gameOver.wav');
        
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    
    startMusic()
    {
        this.bgMusic.play();
    }
}

if(document.readyState==='loading')
{
    document.addEventListener('DOMContentloaded', ready());
}
else ready();

function ready()
{
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));//pr ke chaque overlay-text soit garder dans un array
    
    overlays.forEach(e=>
    {
        e.addEventListener('click', ()=>
        {
            e.classList.remove('visible');
            let audio = new AudioController();
            audio.startMusic();
        });
    });
}

