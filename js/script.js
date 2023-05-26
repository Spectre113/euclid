//How
document.querySelectorAll('.how__button-panel').forEach(function(tabsBtn){
	tabsBtn.addEventListener('click', function(e){
		const path = e.currentTarget.dataset.path;
		document.querySelectorAll('.how__button-panel').forEach(function(btn){
btn.classList.remove('how__button-panel--active')});
	e.currentTarget.classList.add('how__button-panel--active');
	document.querySelectorAll('.how__content').forEach(function(tabsBtn){
tabsBtn.classList.remove('how__content--active')});
document.querySelector(`[data-target="${path}"]`).classList.add('how__content--active');
	});
});

// FAQ
$(document).ready(function () {
    $('.FAQ__item').on('click', function (e) {
        $(this).find('.FAQ__plus').toggleClass('FAQ--transform');
    });
});
$(".accordion").accordion({
	heightStyle: "content",
	collapsible: true,
	active: false,
});
 // Hamburger

var btn = document.querySelector('.header__dropdown-btn');
var menu = document.querySelector('.mobile-nav--noactive');
var close = document.querySelector('.close--mobile');
btn.addEventListener('click', function(){
	menu.classList.remove('mobile-nav--noactive');
});
close.addEventListener('click', function(){
	menu.classList.add('mobile-nav--noactive');
});
// Search
var search = document.querySelector('.header__nav-button-noactive');
var nav = document.querySelector('.header__nav');
var searchcontent= document.querySelector('.header__nav-content');
var close = document.querySelector('.clear-button');
var header = document.querySelector('.header');
search.addEventListener('click', function(){
	// nav.classList.add('header__nav--noactive');
	search.classList.add('header__nav--noactive');
	searchcontent.classList.add('header__nav-content-active');
	// header.classList.add('container');
	// header.classList.add('header-search');
});
close.addEventListener('click', function(){
	// nav.classList.remove('header__nav--noactive');
	search.classList.remove('header__nav--noactive');
	searchcontent.classList.remove('header__nav-content-active');
	// header.classList.remove('container');
	// header.classList.remove('header-search');
})
// Swiper
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 200,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 5000,
  },
});
