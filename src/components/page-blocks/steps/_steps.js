function stepsSwitcher ()
{
  const buttons = document.querySelectorAll('.steps__button');
  const steps = document.querySelectorAll(".step");

  let maxHeight = 0;

  steps.forEach(el =>
  {
    if (el.scrollHeight > maxHeight) {
      maxHeight = el.scrollHeight;
      document.querySelector('.steps__wrapper').style.height=maxHeight+"px";
    }
  })


  buttons.forEach(
    el => { el.addEventListener('click', switchStep) }
  )

  function switchStep (e)
  {
    let step = e.currentTarget.dataset.step;
    const thisStep = document.querySelector(`.step[data-step="${step}"]`);
    if (!e.currentTarget.classList.contains("--is-active")) {
      buttons.forEach(el => { el.classList.remove("--is-active") });
      e.currentTarget.classList.add('--is-active');
      steps.forEach(el =>
      {
        el.style.opacity = 0;
        setTimeout(() => {
          el.classList.remove("--is-active")
          el.removeAttribute("style")
          thisStep.classList.add("--is-active");
          thisStep.style.opacity = 1;
        }, 250);
      })
    }
  }

}

stepsSwitcher()