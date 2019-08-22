var transitionAnimation = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

  startTransition: function() {
    var outTransition = new TimelineMax();
    outTransition
    .to('.title', 1, {y: -50, autoAlpha: 0})
    .set('.color-wipe', {display: 'block', y: '100%'})
    .staggerFromTo('.color-wipe', 1, {y: '100%'}, {y: '-100%', ease: Expo.easeOut}, 0.2)
  },

  fadeIn: function() {
    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 400, function() {

      _this.done();
    });
  }
});

Barba.Pjax.getTransition = function() {
  return transitionAnimation;
};

Barba.Pjax.start();