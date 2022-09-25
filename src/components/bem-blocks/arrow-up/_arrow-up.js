function arrowUp ()
{ 
  const arrow = document.querySelector('.arrow-up');

  window.addEventListener('scroll', showHideArrow);

  function showHideArrow ()
  {
    const arh = window.innerHeight/2;
    if (window.scrollY>=arh) {
      arrow.style.opacity = 1;
      arrow.style.pointerEvents = "all";
      
    } else {
    arrow.style.opacity = 0;
    arrow.style.pointerEvents = "none";
      }
    }
  }
arrowUp();