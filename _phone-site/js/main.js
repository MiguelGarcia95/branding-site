var tlFirstScroll = new TimelineMax();

tlFirstScroll
.set('.iphone-image-wrapper', {scale: 4, transformOrigin: 'center top'})
.to('.iphone-image-wrapper', 3, {scale: 2.5, y: '-50%'})
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
.addTo(controller)