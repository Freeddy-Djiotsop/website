let navbar = document.getElementById('navbar');
let items = Array.from(document.getElementsByClassName('items'));
let section = Array.from(document.getElementsByTagName('section'));
let vis = "visible" ;

function remove()//Ausblenden
{
    section.forEach(e=>
    {
        e.classList.remove(vis);
    });
}



for(let i = 0; i<6; i++)
{
    let el = section[i];
    document.getElementById('item'+i).addEventListener('click', ()=>
    {
        if(el.classList.contains(vis)===false)
        {
            remove();
            el.classList.add(vis);
            if(section[1].classList.contains(vis)||section[3].classList.contains(vis)||section[5].classList.contains(vis))
            {
                if(navbar.classList.contains(vis)===false)
                    navbar.classList.add(vis);
            }
            else navbar.classList.remove(vis);
        }
    });
}

document.getElementById('hireme').addEventListener('click',()=>
{
    let el = section[5];
    if(el.classList.contains(vis)===false)
    {
        remove();
        el.classList.add(vis);
        if(navbar.classList.contains(vis)===false)
            navbar.classList.add(vis);
    }
});

(function()
{
    remove();
    section[0].classList.add(vis);
})();