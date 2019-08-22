var transitionAnimation = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.startTransition()])
      .then(this.fadeIn.bind(this));
  },

  startTransition: function() {
    return $(this.oldContainer).animate({ opacity: 0 }).promise();
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