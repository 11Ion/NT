var d1 = document.getElementById('d1');
var d2 = document.getElementById('d2');
var d3 = document.getElementById('d3');
var d4 = document.getElementById('d4');

var l1 = document.getElementById('l1');
var l2 = document.getElementById('l2');
var l3 = document.getElementById('l3');
var l4 = document.getElementById('l4');

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

let slideIndex = [1,1,1,1]
let slideId = ["sl","sl1","sl2","sl3"]


function PlusSlide(n, no){
    showSlides(slideIndex[no] += n,no)
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
      slideIndex[no] = 1;
  }
  if (n < 1) {
      slideIndex[no] = x.length;
  }

  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      x[i].style.opacity = 0; 
  }
  
  fadeIn(x[slideIndex[no] - 1]); 
}

function fadeIn(element) {
  element.style.display = "block";
  let opacity = 0;
  let interval = setInterval(function () {
      if (opacity < 1) {
          opacity += 0.1;
          element.style.opacity = opacity; 
      } else {
          clearInterval(interval);
      }
  }, 50);
}
function scrollToMiddle() {
  let element = document.getElementById("d1");
  let offsetTop = element.offsetTop;
  let elementHeight = element.offsetHeight;
  let windowHeight = window.innerHeight;
  let scrollTo = offsetTop - (windowHeight / 2) + (elementHeight / 2);
  
  window.scrollTo({
    top: scrollTo,
    behavior: "smooth"
  });
}

let button = document.getElementById("goscroll");
button.addEventListener("click", scrollToMiddle);
function afiseazaAlerta() {
  alert("It is not working at the moment");
}

window.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementById('menu');
  if (element) {
    element.addEventListener('click', afiseazaAlerta);
  }
});