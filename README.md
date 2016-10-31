# Hover-zoom module
Position-independent hover-zoom module

See demo here: https://www.cunninghamwebdd.com/demo/hover-zoom/

## Summary
This is a simple hover-zoom module that you can place anywhere on a page. The aspect-ratio of the images are designed to be 1:1
since the containers are of 1:1 aspect-ratio.

The larger image should be 5 times larger than the smaller image. However any image will work, the magnification is done in the code. 

The smaller image should have a height/width dimension of 300px by 300px.

The code uses a combination of requestAnimationFrame, variable caching, and translate3d to optimize performance.

## Operation

This is designed around two-containers, the image that you want to magnify is on the left, and some text/description is on the right. When you hover on the small image, a larger-zoomed-in image will overlay the text/description container. When the mouse leaves the small-image area, the larger-zoomed-in image will disappear and the text/description will once again be visible.

## Code implementation

There is a compressed file which includes a copy of jQuery, a css-reset file, actual code itself and the sample images.

### Static implementation

This means that there will only be one image to be zoomed. In this case, all you'd need to do is to make sure your small image with a dimension of 300px by 300px be named small-image.jpg and the larger image to be shown for the zoom-effect to have a dimension of 1500px by 1500px (preferrably).

Include the hover-zoom-module.css, square-cursor.png, the hover-handler.js, files and the photos themselves. 

Then drop the zoom-module part of the code in your site:

```
<div id="zoom-module">
  <div id="small-image-container">
    <img src="small-image.jpg" id="small-image" width="300px" height="300px">
  </div>
  <div id="text-container">
    <h1 class="big-text">Sample header</h1>
    <p>Sample text</p>
  </div>
  <div id="zoomed-image-container">
    <img src="large-image.jpg" id="large-image" width="1500px" height="1500px">
  </div>
</div>

```

### Dynamic implementation

In the dynamic version, you'd have a script that changes the source of both the small and large images. Otehrwise the rest is the same.

### Note
This is only intended to be used on non-touch screen devices eg. devices with a mouse, as the tracking does not work well on 
touch-based devices like a phone.

This requires jQuery
