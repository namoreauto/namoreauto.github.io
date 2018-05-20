'use strict';

function initMap() {
  var coordinates = {
    center: {
      lat: 46.120182,
      lng: 32.291936
    },
    autostation: {
      lat: 46.124487,
      lng: 32.285887
    },
    barkas: {
      lat: 46.119576,
      lng: 32.282121
    },
    seafront: {
      lat: 46.118358,
      lng: 32.287619
    },
    yubileyniy: {
      lat: 46.119357,
      lng: 32.291644
    },
    favorit: {
      lat: 46.116797,
      lng: 32.295109
    },
    mriya: {
      lat: 46.117771,
      lng: 32.296360
    },
    oldMarket: {
      lat: 46.119522,
      lng: 32.299812
    },
    crystal: {
      lat: 46.118243,
      lng: 32.302128
    }
  }

  var markerIcon = 'img/map-marker.png';

  var map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 15,
    center: coordinates.center,
    disableDefaultUI: true
  });

  var autostationMarker = new google.maps.Marker({
    name: 'autostation',
    icon: markerIcon,
    position: coordinates.autostation,
    map: map
  });
  var barkasMarker = new google.maps.Marker({
    name: 'barkas',
    icon: markerIcon,
    position: coordinates.barkas,
    map: map
  });
  var seafrontMarker = new google.maps.Marker({
    name: 'barkas',
    icon: markerIcon,
    position: coordinates.seafront,
    map: map
  });
  var yubileyniyMarker = new google.maps.Marker({
    name: 'barkas',
    icon: markerIcon,
    position: coordinates.yubileyniy,
    map: map
  });
  var favoritMarker = new google.maps.Marker({
    name: 'barkas',
    icon: markerIcon,
    position: coordinates.favorit,
    map: map
  });
  var mriyaMarker = new google.maps.Marker({
    name: 'barkas',
    icon: markerIcon,
    position: coordinates.mriya,
    map: map
  });
  var oldMarketMarker = new google.maps.Marker({
    name: 'barkas',
    icon: markerIcon,
    position: coordinates.oldMarket,
    map: map
  });
  var crystalMarker = new google.maps.Marker({
    name: 'barkas',
    icon: markerIcon,
    position: coordinates.crystal,
    map: map
  });

  var markers = [];
  markers.push(
    autostationMarker,
    barkasMarker,
    seafrontMarker,
    yubileyniyMarker,
    favoritMarker,
    mriyaMarker,
    oldMarketMarker,
    crystalMarker
  );

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
}

'use strict';

(function () {
  var header = document.querySelector('.main-header');
  var menuButton = header.querySelector('.main-header__btn');
  var headerContent = header.querySelector('.main-header__content');
  var mainNavLinks = header.querySelectorAll('.main-nav__link');
  var toursLink = header.querySelector('.main-nav__link--tours');
  var toursLinks = header.querySelectorAll('.nav-tours__link');
  var tours = header.querySelector('.nav-tours');

  var spanList = menuButton.querySelectorAll('span');

  function hamburgerX() {
    spanList[0].style.transform = 'translateY(8px)'
    spanList[1].style.opacity = '0';
    spanList[2].style.transform = 'translateY(-8px)'

    setTimeout(function () {
      spanList[0].style.transform = 'translateY(8px) rotate(45deg)'
      spanList[0].style.backgroundColor = '#f1b200';
      spanList[2].style.transform = 'translateY(-8px) rotate(-45deg)'
      spanList[2].style.backgroundColor = '#f1b200';
    }, 200);
  }

  function hamburgerNormal() {
    spanList[0].style.transform = 'translateY(8px) rotate(0)'
    spanList[0].style.backgroundColor = '#6ac0f3';
    spanList[2].style.transform = 'translateY(-8px) rotate(0)'
    spanList[2].style.backgroundColor = '#6ac0f3';

    setTimeout(function () {
      spanList[0].style.transform = 'translateY(0)'
      spanList[1].style.opacity = '1';
      spanList[2].style.transform = 'translateY(0)'
    }, 200);
  }

  function menuBtnAnimate(state) {
    if (state === true) {
      hamburgerX()
    } else {
      hamburgerNormal();
    }
  }

  function menuButtonClickHandler(evt) {
    evt.preventDefault()
    headerContent.classList.toggle('main-header__content--hidden')

    if (headerContent.classList.contains('main-header__content--hidden') === true) {
      menuBtnAnimate(false);
    } else {
      menuBtnAnimate(true);
    }

    if (headerContent.classList.contains('main-header__content--hidden') === true) {
      tours.classList.add('nav-tours--hidden');
      toursLink.style.color = 'inherit';
    }
  }

  function toursLinkClickHandler(evt) {
    evt.preventDefault()
    tours.classList.toggle('nav-tours--hidden')

    if (tours.classList.contains('nav-tours--hidden') === true) {
      toursLink.style.color = 'inherit';
    } else {
      toursLink.style.color = '#f1b200';
    }
  }

  function mainNavLinksClickHandler(evt) {
    for (var i = 0; i < mainNavLinks.length; i++) {
      if (evt.target === mainNavLinks[i] && evt.target !== toursLink) {
        headerContent.classList.toggle('main-header__content--hidden');
        hamburgerNormal();
      }
    }

    if (headerContent.classList.contains('main-header__content--hidden') === true) {
      tours.classList.add('nav-tours--hidden');
      toursLink.style.color = 'inherit';
    }
  }

  function toursLinksClickHandler(evt) {
    for (var i = 0; i < toursLinks.length; i++) {
      if (evt.target === toursLinks[i]) {
        headerContent.classList.toggle('main-header__content--hidden');
        hamburgerNormal();
      }
    }

    if (headerContent.classList.contains('main-header__content--hidden') === true) {
      tours.classList.add('nav-tours--hidden');
      toursLink.style.color = 'inherit';
    }
  }

  if (window.matchMedia('(max-width: 1023px)').matches === true) {
    menuButton.addEventListener('click', menuButtonClickHandler);
    toursLink.addEventListener('click', toursLinkClickHandler);
    header.addEventListener('click', mainNavLinksClickHandler);
    header.addEventListener('click', toursLinksClickHandler);
  } else {
    menuButton.removeEventListener('click', menuButtonClickHandler);
    toursLink.removeEventListener('click', toursLinkClickHandler);
    header.removeEventListener('click', mainNavLinksClickHandler);
    header.removeEventListener('click', toursLinksClickHandler);
  }
})();

'use strict';

(function () {
  var toursLink = document.querySelector('.main-nav__link--tours');

  if (window.matchMedia('(max-width: 1023px)').matches !== true) {
    toursLink.setAttribute('href', '#tours');
  }

  var linkNav = document.querySelectorAll('a[href*="#"]');
  var speed = 0.1;  // скорость, может иметь дробное значение через точку

  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
      e.preventDefault();
      var w = window.pageYOffset;  // прокрутка
      var hash = this.href.replace(/[^#]*(.*)/, '$1');  // id элемента, к которому нужно перейти
      var t = document.querySelector(hash).getBoundingClientRect().top;  // отступ от окна браузера до id
      var start = null;

      function step(time) {
        if (start === null) start = time;
        var progress = time - start;
        var r = (t < 0 ? Math.max(w - progress/speed, w + t) : Math.min(w + progress/speed, w + t));
        window.scrollTo(0,r);
        if (r != w + t) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash  // URL с хэшем
        }
      }
      requestAnimationFrame(step);
    }, false);
  }
})();
