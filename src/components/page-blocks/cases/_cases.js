function caseCount() {
  const animationDuration = 4000
  const frameDuration = 1000 / 60
  const totalFrames = Math.round(animationDuration / frameDuration)
  const easeOutQuad = (t) => t * (2 - t)
  const animateCountUp = (el) => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);

    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const currentCount = Math.round(countTo * progress);
      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.innerHTML = currentCount;
      }
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  const countupEls = document.querySelectorAll(".countup");

  document.addEventListener('scroll', startCount)

  function startCount() {
    if (countupEls.length && window.scrollY > document.querySelector('.cases').offsetTop - window.innerHeight) {
      countupEls.forEach(animateCountUp);
      document.removeEventListener('scroll', startCount)
    }
  }
}

caseCount();

function casesFilter() {
  const casesBtns = document.querySelectorAll('.cases__filter-btn');
  const caseSlidesAll = document.querySelectorAll('.cases__slide');

  casesBtns.forEach(el => {
    el.addEventListener('click', filterByClick)
  })

  function filterByClick(e) {
    const filterParameter = e.currentTarget.dataset.type;
    const currentCases = document.querySelectorAll(`.cases__slide[data-type="${ filterParameter }"]`)
    if (!e.currentTarget.classList.contains("--is-active")) {
      casesBtns.forEach(el => {
        el.classList.remove("--is-active")
      });
      e.currentTarget.classList.add('--is-active');

      if (filterParameter !== "0") {
        caseSlidesAll.forEach(el => el.style.display = "none")
        caseSlidesAll.forEach(el => el.classList.remove('--is-active'))
        // currentCases.forEach(el => el.style.display = "block");
        currentCases.forEach(el => el.removeAttribute('style'));
        currentCases.forEach(el => el.classList.add('--is-active'));
      } else {
        caseSlidesAll.forEach(el => el.removeAttribute('style'))
        caseSlidesAll.forEach(el => el.classList.add('--is-active'))
      }
    }
  }
}

casesFilter();