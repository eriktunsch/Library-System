  // number count for stats, using jQuery animate
  $('.counting').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({
          countNum: $this.text()
      }).animate({
          countNum: countTo
      }, {
          duration: 2000,
          easing: 'linear',
          step: function() {
              $this.text(Math.floor(this.countNum) + $this.attr('data-text'));
          },
          complete: function() {
              $this.text(this.countNum + $this.attr('data-text'));
              //alert('finished');
          }
      });
  });