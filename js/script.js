// Ініціалізація карти Google
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 0, lng: 0 },
    zoom: 8
  });
}

const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('#dws-ul');

let isOpen = false;

menuToggle.addEventListener('click', function () {
  isOpen = !isOpen;
  menuToggle.classList.toggle('open', isOpen);
  menuItems.classList.toggle('expanded', isOpen);
});

menuToggle.addEventListener('mouseenter', function () {
  if (isOpen) {
    menuToggle.classList.add('hover');
  }
});

menuToggle.addEventListener('mouseleave', function () {
  if (isOpen) {
    menuToggle.classList.remove('hover');
  }
});



// Плавне з'явлення тексту при скролінгу
window.addEventListener('scroll', function() {
  var introSection = document.getElementById('intro-section');
  var introPosition = introSection.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;

  if (introPosition < screenPosition) {
    introSection.classList.add('show');
  }
});


//банери
document.addEventListener('DOMContentLoaded', function() {
  var banners = document.querySelectorAll('.banner');
  banners.forEach(function(banner) {
    banner.addEventListener('mouseenter', function() {
      this.querySelector('.banner-img').style.transform = 'translateY(-100%)';
    });
    banner.addEventListener('mouseleave', function() {
      this.querySelector('.banner-img').style.transform = 'none';
    });
  });
});