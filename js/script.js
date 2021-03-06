// venubox============
new VenoBox({
    selector: '.venobox'
  });

  // testimonial_slider==
  $('.testimonial_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<i class="fa-solid fa-arrow-left left_arrow"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right right_arrow"></i>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });


// mixitup==============
var mixer = mixitup('.port');



// sticky header===============
  $(window).scroll(function(){
      if($(this).scrollTop() > 100){
          $('#main_menu').addClass('sticky')
      } else{
          $('#main_menu').removeClass('sticky')
        }
  });


// scroll part start=================
$(window).scroll(function(){
  if($(this).scrollTop() > 200){
      $('.scroll_top').addClass('back_top')
  } else{
      $('.scroll_top').removeClass('back_top')
  }
});
// scroll part end=================


// type_js====================================
var typed = new Typed('.element', {
  strings: [
    'Font-end-Developer',
    'Web Designer',
    'Weordpress Expert',
    'Programer'
  ],
  typeSpeed: 80,
  startDelay: 0,
  smartBackspace: true,
  shuffle: false,
  backDelay: 700,
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  loop: true,
  loopCount: Infinity,  
});
// type js end=============================

// barfiller=====================
$(document).ready(function(){

  $('#bar1').barfiller();
  $('#bar2').barfiller();
  $('#bar3').barfiller();
  $('#bar4').barfiller();
  $('#bar5').barfiller();
  $('#bar6').barfiller();
  $('#bar7').barfiller();
  $('#bar8').barfiller();
});

// open_new window popuup===================
function openpopup(){
  window.open('blog/post1.html','about us','width=820, height=500, left=300, top=100');
}

// develop_popup=================
function develop(){
  window.open('blog/develop.html','Development','width=820, height=500, left=300, top=100');
}

// wordpress_popup=================
function wordpress(){
  window.open('blog/wordpress.html','Development','width=820, height=500, left=300, top=100');
}

// wow_js================
new WOW().init();




window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
