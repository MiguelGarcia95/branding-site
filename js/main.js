// On Document ready
jQuery(document).ready(function ($) {
  var tweenAnimIn = new TimelineMax ();
  tweenAnimIn
    .set('h1', {autoAlpha: 0})
    .from('.phone-phone', 1, {y: -1000, autoAlpha: 0, ease: Power2.easeOut })
    .from('.phone-contact', 1, {y: -600, autoAlpha: 0, ease: Power2.easeOut }, '-=0.5')
    .from('.phone-music', 1, {x: -600, y: -600, autoAlpha: 0, ease: Power2.easeOut }, '-=0.5')
    .from('.phone-music2', 1, {x: -400, y: -400, autoAlpha: 0, ease: Power2.easeOut }, '-=0.5')
    .from('.phone-msg', 1, {x: -600, y: -600, autoAlpha: 0, ease: Power2.easeOut }, '-=0.5');

  
  var controller  = new ScrollMagic.Controller();

  var scrollOutAnim = new TimelineMax()
    .add([
      TweenMax.to('.phone-msg', 1, {y: -600, autoAlpha: 0}),
    ]);
  
    var scrollScene = new ScrollMagic.Scene({
      
    })
});

// window.onload = function() {
// var tweenAnimIn = new TimelineMax ();
// tweenAnimIn
//   .set('h1', {autoAlpha: 0})
//   .from('.phone-phone', 1, {y: -1000, autoAlpha: 0, ease: Power2.easeOut })
//   .from('.phone-contact', 1, {y: -600, autoAlpha: 0, ease: Power2.easeOut }, '-=0.5')
//   .from('.phone-music', 1, {x: -600, y: -600, autoAlpha: 0, ease: Power2.easeOut }, '-=0.5')
//   .from('.phone-music2', 1, {x: -400, y: -400, autoAlpha: 0, ease: Power2.easeOut }, '-=0.5')
//   .from('.phone-msg', 1, {x: -600, y: -600, autoAlpha: 0, ease: Power2.easeOut }, '-=0.5')
// }