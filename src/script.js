var d1 = document.getElementById('d1');
var d2 = document.getElementById('d2');
var d3 = document.getElementById('d3');
var d4 = document.getElementById('d4');

var l1 = document.getElementById('l1');
var l2 = document.getElementById('l2');
var l3 = document.getElementById('l3');
var l4 = document.getElementById('l4');

// Function to add transition and animation effect
function addTransition(element) {
  element.style.opacity = '0';
  element.style.transition = 'opacity 0.5s';
  setTimeout(function() {
    element.style.opacity = '1';
  }, 0);
}

l1.addEventListener('click', function() {
  d1.style.display = 'block';
  d2.style.display = 'none';
  d3.style.display = 'none';
  d4.style.display = 'none';
  
  addTransition(d1);
  
  l1.style.opacity = '1';
  l2.style.opacity = '0.5';
  l3.style.opacity = '0.5';
  l4.style.opacity = '0.5';
});

l2.addEventListener('click', function() {
  d1.style.display = 'none';
  d2.style.display = 'block';
  d3.style.display = 'none';
  d4.style.display = 'none';
  
  addTransition(d2);
  
  l1.style.opacity = '0.5';
  l2.style.opacity = '1';
  l3.style.opacity = '0.5';
  l4.style.opacity = '0.5';
});

l3.addEventListener('click', function() {
  d1.style.display = 'none';
  d2.style.display = 'none';
  d3.style.display = 'block';
  d4.style.display = 'none';
  
  addTransition(d3);
  
  l1.style.opacity = '0.5';
  l2.style.opacity = '0.5';
  l3.style.opacity = '1';
  l4.style.opacity = '0.5';
});

l4.addEventListener('click', function() {
  d1.style.display = 'none';
  d2.style.display = 'none';
  d3.style.display = 'none';
  d4.style.display = 'block';
  
  addTransition(d4);
  
  l1.style.opacity = '0.5';
  l2.style.opacity = '0.5';
  l3.style.opacity = '0.5';
  l4.style.opacity = '1';
});

let caruselContainers = document.querySelectorAll('.container');

caruselContainers.forEach((caruselContainer) => {
  let images = Array.from(caruselContainer.querySelectorAll('.img'));
  let leftButton = caruselContainer.querySelector('.lefts');
  let rightButton = caruselContainer.querySelector('.rights');

  let currentIndex = 0;

  images.forEach((image, index) => {
    if (index !== currentIndex) {
      image.classList.add('hidden');
    }
  });

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.classList.remove('hidden');
      } else {
        image.classList.add('hidden');
      }
    });
  }

  if (leftButton) {
    leftButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  }

  if (rightButton) {
    rightButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  }
});
