// define initial variables
var target            = document.getElementById('small-image-container'),
    largeImageBox     = $("#zoomed-image-container"),
    largeImage        = $("#large-image"),
    smallImage        = $("#small-image"),
    textContainer     = $("#text-container"),
    largeImageVisible = false,
    resetRequested    = false,
    xCoord            = 0,
    yCoord            = 0,
    start             = null;
// test visibility
function testVisibility() {
  if (largeImageVisible === false) {
    largeImageVisible = true; // update variable
    // hide text-container
    textContainer.css( {
      'opacity' : 0
    });
    // show zoomed-image-container
    largeImageBox.css({
      'opacity' : 1
    });
  }
  else {
    largeImageVisible = false; // update variable
    // hide zoomed-image-container
    largeImageBox.css({
      'opacity' : 0
    });
    // show text-container
    textContainer.css( {
      'opacity' : 1
    });
  }
}
// grab cursor coordinates
smallImage.on({
  mouseover : function() {
    testVisibility();
    updateLargeImage();
  },
  mousemove : function (event) {
    xCoord = (((event.offsetX - 30)*-5));
    yCoord = (((event.offsetY - 30)*-5));
  },
  mouseout  : function () {
    testVisibility();
  }
});
function updateLargeImage() {
  largeImage.css({
    "-webkit-transform"  : 'translate3d(' + xCoord + 'px' + ', ' + yCoord + 'px' + ', 0)', /* Chrome & Safari */
    "-o-transform"       : 'translate3d(' + xCoord + 'px' + ', ' + yCoord + 'px' + ', 0)', /* Opera */
    "-moz-transform"     : 'translate3d(' + xCoord + 'px' + ', ' + yCoord + 'px' + ', 0)', /* Firefox */
  });

  if (largeImageVisible === true) {
    window.requestAnimationFrame(updateLargeImage);
  }
}
