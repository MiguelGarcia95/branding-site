var tlFirstScroll = new TimelineMax();

tlFirstScroll
.set('.iphone-image-wrapper', {scale: 4, transformOrigin: 'center top'})
.to('.iphone-image-wrapper', 3, {scale: 3, y: '-60%'})
.to('.iphone-image-wrapper', 3, {scale: 1, y: '0%'});

var controller = new ScrollMagic.Controller();

// First Scene

var firstScene = new ScrollMagic.Scene({
  triggerElement: '.trigger1',
  triggerHook: 0,
  duration: '100%',
})
.setTween(tlFirstScroll)
.addIndicators()
.addTo(controller);


var tlSecondScroll = new TimelineMax();

tlSecondScroll
.to('.iphone1', 3, {x: '-50%'})
.to('.iphone2', 3, {x: '50%'}, '-=3')
.from('.iphone1-text', 0.3, {autoAlpha: 0}, '-=3')
.from('.iphone2-text', 0.3, {autoAlpha: 0}, '-=3')
.to('.iphone1-text', 3, {x: '-30%'}, '-=3')
.to('.iphone2-text', 3, {x: '30%'}, '-=3');

var secondScene = new ScrollMagic.Scene({
  triggerElement: '.trigger2',
  triggerHook: 0,
  duration: '100%',
})
.setTween(tlSecondScroll)
.setPin('.trigger2')
.addIndicators()
.addTo(controller)