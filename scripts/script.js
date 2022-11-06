// Header search

let searchBtn = document.querySelector('.header__search__btn');
let searchField = document.querySelector('.header__search__field');
let search = document.querySelector('.header__main__btns');

searchBtn.addEventListener('click', function() {
    search.classList.toggle('header__main__btns--active');
    searchField.classList.toggle('header__search__field--active');
});

// Header burger

let navBtn = document.querySelector('.header__burger');
let navMenu = document.querySelector('.header__main__list');
let navLink = document.querySelectorAll('.header__main__link');
let extraNav = document.querySelector('.header__extra__nav');
let extraLink = document.querySelectorAll('.header__extra__link');

navBtn.addEventListener('click', function() {
    navMenu.classList.toggle('header__main__list--active');
    navBtn.classList.toggle('header__burger--active');
    extraNav.classList.toggle('header__extra__nav--active');
    document.body.classList.toggle('stop-scroll');
});
navLink.forEach(function(headNav) {
    headNav.addEventListener('click', function() {
        navMenu.classList.remove('header__main__list--active');
        navBtn.classList.remove('header__burger--active');
        extraNav.classList.remove('header__extra__nav--active');
        document.body.classList.remove('stop-scroll');
    });
extraLink.forEach(function (extrNav) {
    extrNav.addEventListener('click', function() {
        navBtn.classList.remove('header__burger--active');
        extraNav.classList.remove('header__extra__nav--active');
        navMenu.classList.remove('header__main__list--active');
        document.body.classList.remove('stop-scroll');
    });
});
});

// Header play
let music = document.querySelectorAll('.header__music__play');

music.forEach(function(e) {
    e.addEventListener('click', function(i) {
        i.currentTarget.closest('.header__music__play').classList.toggle('header__music__play--toggle');
    });
});

// Header live opening

let liveBtn = document.querySelector('.header__live__btn');
let liveItem = document.querySelector('.header__music');
let liveContainer = document.querySelector('.header__container--bottom');

liveBtn.addEventListener('click', function () {
      liveBtn.classList.toggle('header__live__btn--active')
      liveItem.classList.toggle('header__music--active');
      liveContainer.classList.toggle('header__container--active');
  });

// Podcasts play
let playBtn = document.querySelectorAll('.podcast__play');

playBtn.forEach(function (play) {
    play.addEventListener('click', function (toggle) {
        toggle.currentTarget.closest('.podcast__play').classList.toggle('podcast__play--toggle');
    });
});

// More podcasts

const podcastsItem = document.querySelectorAll('.podcasts__item');
const podcastsMore = document.querySelector('.podcasts__btn');

podcastsMore.addEventListener('click', () =>{
    podcastsItem.forEach(el =>
      el.classList.toggle('podcasts__item--visible'))
});

// Broadcasts select

const element = document.querySelector('.broadcasts__authors');
const choices = new Choices(element, {
    itemSelectText: '',
    searchEnabled: false
});

// Guests accordion

$(function() {
  $("#accordion").accordion({
      collapsible: true,
      heightStyle: "content"
  });
});


// Guests tabs

let guestBtn = document.querySelectorAll('.guest__btn');
let guestItem = document.querySelectorAll('.guest__descr');
let guests = document.querySelector('.guests');

guestBtn.forEach(function (elementGuest) {
    elementGuest.addEventListener('click', function (eGuest) {
        const path = eGuest.currentTarget.dataset.path;

        guestBtn.forEach(function(btnGuests) { btnGuests.classList.remove('guest__btn--active') });
        eGuest.currentTarget.classList.add('guest__btn--active');

        guestItem.forEach(function(elementGuest) { elementGuest.classList.remove('guest__descr--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('guest__descr--active');

        guests.classList.add('guests--active')
    });
});


// Playlists tabs

let playlistRadio = document.querySelectorAll('.playlists__radio');
let playlistContent = document.querySelectorAll('.playlists__content');
let playlistBtn = document.querySelectorAll('.playlists__type')

playlistRadio.forEach(function (elPlay) {
    elPlay.addEventListener('click', function (ePlay) {
        const way = ePlay.currentTarget.dataset.way;

        playlistContent.forEach(function (elPlay) { elPlay.classList.remove('playlists__content--active') });
        document.querySelector(`[data-aim="${way}"]`).classList.add('playlists__content--active');
    });
});

playlistBtn.forEach(function (pl) {
    pl.addEventListener('click', function (p) {
        playlistBtn.forEach(function (del) {
            del.classList.remove('playlists__type--active');
        });
        p.currentTarget.classList.add('playlists__type--active');
    })
});


// About-us slider

const swiper = new Swiper('.about-us__swiper', {
    slidesPerView: 4,
    slidesPerGroup: 2,
    loop: true,
    spaceBetween: 30,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 3000,
    },

    breakpoints: {

      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      640: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      1200: {
          slidesPerView: 4,
          spaceBetween: 30
      }
    },

    a11y: {
        containerMessage: 'Слайдер с авторами радио W-Wave',
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
    },
});

// About-us validation

const validate = new window.JustValidate('.about-us__form');

validate
  .addField('#name', [
    {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимум 3 символа'
    },
    {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Минимум 3 символа'
    },
    {
        rule: 'required',
        errorMessage: 'Обязательное поле'
    },
    {
        rule: 'customRegexp',
        value: /[a-zA-ZА-Яа-я]/,
        errorMessage: 'Ошибка'
    }
  ])
  .addField('#email', [
    {
        rule: 'required',
        errorMessage: 'Обязательное поле'
    },
    {
        rule: 'email',
        errorMessage: 'Неверный E-mail'
    }
  ]);
