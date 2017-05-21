/*  $('#fullpage').fullpage({
    navigation: true,
    sectionsColor: ['#ff451a', '#ededed', '#ededed', '#ededed', '#ededed', '#ededed', '#ededed', '#ededed', '#ededed', '#ededed'], // rgba(37, 39, 46, 0.5)
    anchors: ['main', 'news'],
    menu: '#menu',
    easing: 'easeInOutCubic',
    easingcss3: 'cubic-bezier(0.825, 0, 0.5, 1)',
    css3: true,
    scrollingSpeed: 700,
    //normalScrollElements: '#wrap-scroll, #map',
    scrollOverflow: true,
    verticalCentered: true,
    animateAnchor: true,
    resize : true,
    onLeave: function(index, nextIndex, direction) {
      if (index === 5) { // РёРЅРґРµРєСЃ СЃРµРєС†РёРё СЃ РєР°СЂС‚РѕР№
        $.fn.fullpage({
            scrollOverflow: false
        });
      }
	  var timeout = direction === 'down' ? 525 : 300;
    var header = $('header');
    var IScroll = $('#section' + (nextIndex - 1)).find('.fp-scrollable').data('iscrollInstance');

    setTimeout(function() {
	    if (IScroll != undefined) {
  		  IScroll.scrollTo(0, 0, 0);
  		}
		  if (nextIndex === 2) {

      } else if (nextIndex === 3) {

      } else if (nextIndex === 5) {

      } else {

      }
    }, timeout);
	  setTimeout(function() {
      if (nextIndex !== 1) {

      }
  		if (nextIndex !== 2) {

      }
      if (nextIndex !== 3) {

      }
      if (nextIndex !== 4) {

      }
      if (nextIndex !== 5) {

      }
	  }, 550)
  },
  afterLoad: function(anchorLink, index) {
    /* if (anchorLink === 'whereBuy') {
      $.fn.fullpage.setAllowScrolling(false);
    } */
  },
  afterRender: function () {

    if(getParam('id') != null) {
      $(".loading-div").show();
      document.getElementById("firstPage").click();
      setTimeout(function() {
        loadBook(".bookDetail", getParam('id'), getBook);
      }, 1000);
    }
    $.fn.fullpage.setAllowScrolling(false);
  }
});*/