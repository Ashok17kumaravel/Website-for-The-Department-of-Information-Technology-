/**
* Template Name: Company - v4.6.1
* Template URL: https://Nodsync.com/company-free-html-bootstrap-template/
* Author: Nodsync.com
* License: https://Nodsync.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()


// //nav bar
// $(function () {
//   var bar = '';
//   bar+=' <div class="container d-flex align-items-center">';
//   bar+='<h1 class="logo me-auto"><a href="index.html"><img src="./assets/img/itweb/pp.png"></a></h1>';
//   bar+='<nav id="navbar" class="navbar order-last order-lg-0">';
//   bar+='<ul>';
//   bar+=  '<li><a href="index.html" id="NavHome">Home</a></li>';

//   bar+=  '<li class="dropdown"><a href="about.html"><span>About</span> <i class="bi bi-chevron-down"></i></a></li>';
//   bar+=   ' <ul>';;
//   bar+=      '<li><a href="about.html">About Us</a></li>';
//   bar+=      '<li><a href="about.html#team">HOD Profile</a></li>';
//   bar+=     ' <li><a href="about.html#skills">Vision & Mission</a></li>';
//   bar+=      '<li><a href="about.html#faq">PEO PO PSO </a></li>';
//   bar+=      '<li><a href="achive.html">Achievements </a></li>';
//   bar+=      '<li><a href="lab.html">Laboratory</a></li>';
//   bar+=     ' <li><a href="mile.html">Milestone</a></li>';

//   bar+=    '</ul>';
//   bar+=  '</li>';

//   bar+=  '<li><a href="collab.html">Industry Colloboration</a></li>';
//   bar+=  '<li><a href="placement.html">Placement</a></li>';
//   bar+=  '<li><a href="Research.html">Research</a></li>';
//   bar+=   '<li><a href="innovativeprojects.html">Activities </a></li>' ;
//   bar+=  '<li class="dropdown"><a href="#"><span>Activities</span> <i class="bi bi-chevron-down"></i></a>';
//   bar+= '<ul>';
//   bar+=    '<li><a href="innovativeprojects.html">Innovative Projects </a></li>';
//   bar+=    '<li><a href="studentsactivities.html">Student Activities</a></li>';
//   bar+= ' </ul>';
//   bar+=  '</li>';

//   bar+=  '<li><a href="alumini.html">Alumini</a></li>';
//   bar+=  '<li><a href="faculties.html">Faculties</a></li>';
//   bar+=  '<li><a href="contact.html">contact</a></li>';
// bar+=  '</ul>';
// bar+=  '<i class="bi bi-list mobile-nav-toggle"></i>';
// bar+=  '</nav>';

//   $("#main-bar").html(bar);

//   var id = getValueByName("id");
//   $("#" + id).addClass("active");
// });

// function getValueByName(name) {
//   var url = document.getElementById('nav-bar').getAttribute('src');
//   var param = new Array();
//   if (url.indexOf("?") != -1) {
//       var source = url.split("?")[1];
//       items = source.split("&");
//       for (var i = 0; i < items.length; i++) {
//           var item = items[i];
//           var parameters = item.split("=");
//           if (parameters[0] == "id") {
//               return parameters[1];
//           }
//       }
//   }
// }