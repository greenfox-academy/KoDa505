'use strict';

var title = document.querySelector('.mainTitle');

var galleryUrls = [
  'http://aquinashub.co.uk/wp-content/uploads/2015/04/shutterstock_computer_programming.jpg',
  'http://techunofficial.com/wp-content/uploads/2015/01/programming.png',
  'http://aquinashub.co.uk/wp-content/uploads/2015/10/software-programming.jpg',
  'http://thepinstripedsuit.com/wp-content/uploads/2012/12/programming.jpg',
  'http://www.gigabitware.com/images/slide/programming.png',
  'http://www.twitrcovers.com/wp-content/uploads/2013/02/Programming-Code-l.jpg',
  'http://wp.streetwise.co/wp-content/uploads//2014/12/Code.jpg',
];

var backgroundImg = document.querySelector('.background-img');


var forwardButton = document.querySelector('.forward');
var backwardButton = document.querySelector('.backward');

var mainimage = document.querySelector('.mainimage');
var indexOfMainimage = 0;
var thecontent = document.querySelector('.thecontent');
var smallImages = document.querySelector('.thumbnail');

mainimage.classList.add('main-images');

function getNextImage() {
  if (indexOfMainimage + 1 === galleryUrls.length) {
    indexOfMainimage = 0;
  };
    mainimage.setAttribute('src', galleryUrls[indexOfMainimage+1]);
    indexOfMainimage += 1;
  backgroundImg.setAttribute('src', galleryUrls[indexOfMainimage]);
}

function getPrevImage() {
  if (indexOfMainimage-1 === -1) {
    indexOfMainimage = galleryUrls.length-1;
  }
    mainimage.setAttribute('src', galleryUrls[indexOfMainimage-1]);
    indexOfMainimage -= 1;
  backgroundImg.setAttribute('src', galleryUrls[indexOfMainimage]);
}

thecontent.addEventListener('wheel', function(e) {
  if (e.deltaY < 0) {
    getNextImage();
  } else {
    getPrevImage();
  }
});

forwardButton.addEventListener('click', function(){
  getNextImage();
});

backwardButton.addEventListener('click', function() {
  getPrevImage();
});


function imageCreator(src) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', src);
  newImage.classList.add('thumbnail-pics');
  smallImages.appendChild(newImage);
}

for (var i = 0; i < galleryUrls.length; i++) {
  imageCreator(galleryUrls[i]);
}

smallImages.addEventListener('click', function() {
  mainimage.setAttribute('src', event.target.currentSrc);
  getIndexofMain(event.target.currentSrc);
  backgroundImg.setAttribute('src', galleryUrls[indexOfMainimage]);
});

function getIndexofMain(currentSrc) {
  for (var i = 0; i <= galleryUrls.length -1; i++) {
    if (currentSrc === galleryUrls[i]) {
      indexOfMainimage = i;
    }
  }
}
