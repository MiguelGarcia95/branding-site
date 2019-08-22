var transitionAnimation = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

  startTransition: function() {
    var transitionPromise = new Promise(function(resolve) {
      var outTransition = new TimelineMax();
      outTransition
      .to('.title', 1, {y: -50, autoAlpha: 0})
      .set('.color-wipe', {display: 'block', y: '100%'})
      .staggerFromTo('.color-wipe', 1, {y: '100%'}, {y: '-100%', ease: Expo.easeOut}, 0.2)
      .to('.loader', 1, {autoAlpha: 1, onComplete: function() {resolve()}})
      .staggerFromTo('.color-wipe', 1, {y: "-100%"}, {y: '-200%', ease: Expo.easeOut}, 0.2);
    });
    return transitionPromise;
  },

  fadeIn: function() {
    var _this = this;
    var $el = $(this.newContainer);

    TweenMax.set($(this.oldContainer), {display: 'none'});
    TweenMax.fromTo('.loader', 1, {autoAlpha: 1, y: -50}, {autoAlpha: 0, y: 0});
    TweenMax.fromTo('.title', 1.5, {autoAlpha: 0, y: 30}, {autoAlpha: 1, y: 0});
    TweenMax.to($el, 0.1, {opacity: 1, onComplete: function() {_this.done();}});
  }
});

Barba.Pjax.getTransition = function() {
  return transitionAnimation;
};

Barba.Pjax.start();