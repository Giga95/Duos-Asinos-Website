// STICKY //

let nav = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop > 20){ 
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
})

// NAVBAR - MOBILE RESPONSIVE //

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

// SERVICES TABS //
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.services-tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const tab = this.dataset.tab;

    tabBtns.forEach(btn => {
      btn.classList.remove('active-tab');
    });
    this.classList.add('active-tab');

    tabContent.forEach(item => {
      item.style.display = 'none';
    });
    document.querySelector(`#${tab}`).style.display = 'block';
  });
});

// INSIGHTS COUNTER //

const counters = document.querySelectorAll('.counter');
const speed = 10;

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const counter = entry.target;
			let count = +counter.innerText;
			const target = +counter.getAttribute('data-target');

			const updateCount = () => {
				if (count < target) {
					count++;
					counter.innerText = count;
				} else {
					clearInterval(intervalId);
				}
			};

			const intervalId = setInterval(updateCount, speed);
		}
	});
});

counters.forEach((counter) => {
	observer.observe(counter);
});


// FLIP CARDS //

let cards = document.querySelectorAll('.flip-card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

// YEAR //

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// SCROLL REVEAL //

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 15;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } 
  }
}

window.addEventListener("scroll", reveal);

// TO TOP BUTTON //

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// SCROLL NAVBAR 

var lastScrollPosition = 0;

window.addEventListener('scroll', function() {
  var scrollPosition = this.scrollY;
  var header = document.querySelector('.header');
  if (scrollPosition > lastScrollPosition) {
    // User is scrolling down
    header.classList.add('hide');
  } else {
    // User is scrolling up
    header.classList.remove('hide');
  }
  lastScrollPosition = scrollPosition;
});

var careerHeaders = document.querySelectorAll('.career-header');
var headerHeight = 70;

careerHeaders.forEach(function(careerHeader, index) {
  careerHeader.classList.add('career-header-position');
  careerHeader.style.top = (index * headerHeight) + 'px';
});


var header = document.querySelector('.header');
var careerHeaders = document.querySelectorAll('.career-header');

header.addEventListener('transitionend', function() {
  if (header.classList.contains('hide')) {
    // Navigation bar is hidden
    careerHeaders.forEach(function(careerHeader) {
      careerHeader.classList.add('below-navbar');
    });
  } else {
    // Navigation bar is shown
    careerHeaders.forEach(function(careerHeader) {
      careerHeader.classList.remove('below-navbar');
    });
  }
});

// headers fix 

var header = document.querySelector('.header');
var careerHeaders = document.querySelectorAll('.career-header');
var headerHeight = 70;

window.addEventListener('scroll', function() {
  var headersPosition = document.querySelector('.reveal').getBoundingClientRect();
  if (headersPosition.top < 0 && !header.classList.contains('hide')) {
    // Headers are in view and navigation bar is shown
    careerHeaders.forEach(function(careerHeader, index) {
      careerHeader.style.top = (index * headerHeight) + headerHeight + 'px';
    });
  } else {
    // Headers are not in view or navigation bar is hidden
    careerHeaders.forEach(function(careerHeader, index) {
      careerHeader.style.top = (index * headerHeight) + 'px';
    });
  }
});





// FORMA //

const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span"),
buttonSubmit = form.querySelector(".button-area button");

form.onsubmit = (e)=> {
    e.preventDefault();
    statusTxt.style.color = "#a2a6a9";
    statusTxt.style.display = "block";
    statusTxt.innerText = "Sending your message...";
    form.classList.add("disabled");
    buttonSubmit.style.margin = "0";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "message.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState == 4 && xhr.status == 200){
        let response = xhr.response;
        if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
          statusTxt.style.color = "red";
        }else{
          form.reset();
          setTimeout(()=>{
            statusTxt.style.display = "none";
          }, 3000);
        }
        statusTxt.innerText = response;
        form.classList.remove("disabled");
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
  }