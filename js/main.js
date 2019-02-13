var sliderContent = document.querySelectorAll('.offers__slider-item'),
  sliderBtn = document.querySelectorAll('.offers__slider-btn'),
  currentSlide = document.querySelectorAll('.current-slide__item'),
  serviceBtn = document.querySelectorAll('.services__control-btn'),
  serviceContent = document.querySelectorAll('.services__block-item'),
  writeBtn = document.querySelector('.about__contacts-write-us'),
  popUpWrite = document.querySelector('.write-us'),
  closePopUpWrite = document.querySelector('.write-us__close'),
  miniMap = document.querySelector('.about__map'),
  popUpBigMap = document.querySelector('.popup-map'),
  closePopUpBigMap = document.querySelector('.popup-map__close'),
  BuyBtn = document.querySelectorAll('.product__purchase-buy'),
  popUpOrder = document.querySelector('.popup-order'),
  closePopUpOrder = document.querySelector('.popup-order__close'),
  myMap = null,
  currentIndex = 0;

for (var i = 0; i < sliderBtn.length; i++) {
  sliderBtn[i].addEventListener('click', function (e) {
    slideShow(e.target.attributes[1].textContent);
  })
}

function clearClassSlider() {
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

  clearClassSlider();
  sliderContent[currentIndex].classList.add('offers__slider-item_display');
  currentSlide[currentIndex].classList.add('current-slide__item_after');
}

function clearClassService() {
  for (var i = 0; i < serviceContent.length; i++) {
    serviceBtn[i].classList.remove('services__control-btn_active');
    serviceContent[i].classList.remove('services__block_display');
  }
}

for (var i = 0; i < serviceBtn.length; i++) {
  serviceBtn[i].addEventListener('click', function (e) {
    serviceShow(e.target.textContent);
  })
}

function serviceShow(textContent) {
  clearClassService();

  if (textContent === 'Доставка') {
    serviceBtn[0].classList.add('services__control-btn_active');
    serviceContent[0].classList.add('services__block_display');
  }
  if (textContent === 'Гарантия') {
    serviceBtn[1].classList.add('services__control-btn_active');
    serviceContent[1].classList.add('services__block_display');
  }
  if (textContent === 'Кредит') {
    serviceBtn[2].classList.add('services__control-btn_active');
    serviceContent[2].classList.add('services__block_display');
  }
}

for (var i = 0; i < BuyBtn.length; i++) {
  BuyBtn[i].addEventListener('click', function () {
    popUpOrder.classList.add('popup-order_display');
  })
}

closePopUpOrder.addEventListener('click', function () {
  console.log(1);
  popUpOrder.classList.remove('popup-order_display');
})

writeBtn.addEventListener('click', function () {
  popUpWrite.classList.add('write-us_display');
})

closePopUpWrite.addEventListener('click', function () {
  popUpWrite.classList.remove('write-us_display');
})

miniMap.addEventListener('click', function () {
  popUpBigMap.classList.add('popup-map_display');

  ymaps.ready(init);

  function init() {

    myMap = new ymaps.Map('map', {
      center: [59.93863106, 30.32305450],
      zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([59.93862872, 30.32305125], {
      iconContent: 'Техномарт',
      balloonContent: 'Интернет-магазин строительных материалов и инструментов для ремонта "Техномарт" <br> <strong>г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</strong>'
    }, {
      preset: 'islands#dotIcon',
      iconColor: '#ee3643'
    });
    myMap.geoObjects.add(myPlacemark);
  }

})

closePopUpBigMap.addEventListener('click', function () {
  popUpBigMap.classList.remove('popup-map_display');
  myMap.destroy();
})
