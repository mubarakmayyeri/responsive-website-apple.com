//   Collapse  
$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).siblings('.panel-title').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).siblings('.panel-title').removeClass('active');
});

$('.panel-collapse2').on('show.bs.collapse', function () {
  $(this).siblings('.panel-title').addClass('active');
});

$('.panel-collapse2').on('hide.bs.collapse', function () {
  $(this).siblings('.panel-title').removeClass('active');
});

  $(window).on('resize', function(){
  var windowSize = $(window).width();
  if(windowSize < 720) {
     $('.panel-collapse2').collapse('hide');
  } else {
      $('.panel-collapse2').collapse('hide');
  }
});
