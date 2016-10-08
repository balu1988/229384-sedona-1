var jsfree = document.querySelector(".no-js");
jsfree.classList.remove("no-js");

var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".main-nav");

hamburger.addEventListener("click", function (event) {
  event.preventDefault();

  hamburger.classList.toggle("is-active");
  menu.classList.toggle("main-nav--closed");
});

function initMap() {
  var myLatLng = {lat: 34.8741, lng: -111.76322};
  var image = "../img/icon-map-marker.svg";
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.querySelector(".map-container__js-map"), {
    center: myLatLng,
    scrollwheel: false,
    streetViewControl: false,
    zoom: 8,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
      },
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    icon: image,
    position: myLatLng,
    title: "Welcome to Sedona"
  });
}
