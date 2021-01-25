// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

(function()
{
    var scrollY = function()
    {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");


        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    };
    
    
//Puisqu'on ne voit plus le battement de ma pp lorsque la bar de menu n'est plus transparent, j'ai donc decide de mettre une autre couleur et pour cela je devais tenir compte de qnd la bar de menu devient visible, et j'ai remarque qu'il utilisait deja une class navbar-transparent, il la supprime pour rendre le menu visible, je repere juste le moment et j'ajoute black a ma pp
    var pp = document.querySelector("div.cc-profile-image1");
    var ppBlackNow = document.querySelector("nav.navbar");
    var rect = pp.getBoundingClientRect();
    var ppTop = rect.top + scrollY();
//Puisque j'utilise ce qu'il a fait j'ai pas eu besion d'ecrire bcp de code, juste reperer le moment ou il enleve navbar-transparent
    
    
    var onScroll = function()
    {
        
        var hasBlack = pp.classList.contains("black");//Pour guarantir que black ne sera ajoute et retire q'une et une seul fois
        var now = ppBlackNow.classList.contains("navbar-transparent");
        
        
        
        if(!now)
            pp.classList.add("black");
        else if(now)
            pp.classList.remove("black");
            
    }
    
    var onClick = function()
    {
        window.console.log("Cliquer");
        var hasBlack = pp.classList.contains("black");
        if(hasBlack)
            pp.classList.remove("black");
    }
    
    pp.addEventListener("click", onClick);
    window.addEventListener("scroll",onScroll);
})();
