var sliderContent = document.querySelectorAll('.offers__slider-item'),
    sliderBtn = document.querySelectorAll('.offers__slider-btn'),
    currentSlide = document.querySelectorAll('.current-slide__item'),
    currentIndex = 0;

for (var i = 0; i < sliderBtn.length; i++) {
  sliderBtn[i].addEventListener('click', function (e) {
    slideShow(e.target.attributes[1].textContent);
  })
}

function clearClass() {
  for (var i = 0; i < sliderContent.length; i++) {
    sliderContent[i].classList.remove('offers__slider-item_display');
    currentSlide[i].classList.remove('current-slide__item_after');
  }
}

function slideShow(textContent) {
  if (textContent === 'Предыдущий слайд') {
    currentIndex = (currentIndex + 1) % sliderContent.length;
  } else if (textContent === 'Следующий слайд') {
    currentIndex = (currentIndex - 1) % sliderContent.length;
    if (currentIndex === -1) {
      currentIndex = sliderContent.length - 1;
    }
  }
  clearClass();
  sliderContent[currentIndex].classList.add('offers__slider-item_display');
  currentSlide[currentIndex].classList.add('current-slide__item_after');
}
