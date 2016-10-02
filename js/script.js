var jsfree = document.querySelector(".no-js");
jsfree.classList.remove("no-js");


// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});

function initMap() {
        var myLatLng = {lat: 34.8741, lng: -111.76322};
        var image = "../img/icon-map-marker.svg"
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
