var controller = new ScrollMagic.Controller();

$('.project').each(function() {

  var picOverlay = $(this).find('.overlay');
  var projectInfo = $(this).find('.project-info');
  var smallTitle = $(this).find('.small-title');
  var projectLink = $(this).find('.project-link');
  var animateIn = new TimelineMax();

  // With loops
  animateIn
  .fromTo(picOverlay, 2, {skewX:30, scale: 1.5}, {skewX: 0, xPercent: 100, transformOrigin: '0% 100%', ease: Power4.easeOut})
  .from(projectInfo, 1, {scaleY: 0, transformOrigin: "bottom left"}, '-=1.5')
  .from(smallTitle, 0.2, {autoAlpha: 0, y:30, ease: Power4.easeOut}, '-=0.8')
  .from(projectLink, 0.3, {autoAlpha: 0, y:30, ease: Power4.easeOut}, '-=0.8')
  .from('h4', 0.3, {autoAlpha: 0, y:30, ease: Power4.easeOut}, '-=0.8');

  // Without loops
  // animateIn
  // .fromTo('.overlay', 2, {skewX:30, scale: 1.5}, {skewX: 0, xPercent: 100, transformOrigin: '0% 100%', ease: Power4.easeOut})
  // .from('.project-info', 1, {scaleY: 0, transformOrigin: "bottom left"}, '-=1.5')
  // .from('.small-title', 0.2, {autoAlpha: 0, y:30, ease: Power4.easeOut}, '-=0.8')
  // .from('.project-link', 0.3, {autoAlpha: 0, y:30, ease: Power4.easeOut}, '-=0.8')
  // .from('h4', 0.3, {autoAlpha: 0, y:30, ease: Power4.easeOut}, '-=0.8');

  // Scrollmagic scene

  var scene = new ScrollMagic.Scene({
    triggerElement: this
  })
  // .addIndicators()
  .setTween(animateIn).addTo(controller);

});