"use strict";

    function initMap() {
      const CONFIGURATION = {
        "ctaTitle": "Go!",
        "mapOptions": {"center":{"lat":37.4221,"lng":-122.0841},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":true,"zoom":11,"zoomControl":true,"maxZoom":22,"mapId":""},
        "mapsApiKey": "AIzaSyAfsKXONZTLMvwC0PmW2NIm8Xx6CwkKRyY",
        "capabilities": {"addressAutocompleteControl":true,"mapDisplayControl":false,"ctaControl":true}
      };
      const componentForm = [
        'location',
        'locality',
        'administrative_area_level_1',
        'country',
        'postal_code',
      ];
      var place;
      const center = { lat: 42.314879, lng: -72.639944 };
      // Create a bounding box with sides ~10km away from the center point
      const defaultBounds = {
        north: center.lat + 0.3,
        south: center.lat - 0.3,
        east: center.lng + 0.2,
        west: center.lng - 0.2,
      };
      const input = document.getElementById("pac-input");
      const options = {
        bounds: defaultBounds,
        componentRestrictions: { country: "us" },
        fields: ["address_components", "geometry", "name"],
        strictBounds: true,
        types: ["address"],
      };
      const getFormInputElement = (component) => document.getElementById(component + '-input');
      const autocompleteInput = getFormInputElement('location');
      const autocomplete = new google.maps.places.Autocomplete(autocompleteInput, options);
      autocomplete.addListener('place_changed', function () {
        place = autocomplete.getPlace();
        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert('No details available for input: \'' + place.name + '\'');
          return;
        }
        fillInAddress(place);
      });

      function output() {
        location.href='map.html';
        // console.log(place);
      }
      
      var button = document.getElementById("gobutton");
      button.addEventListener("click", output, true);

      function fillInAddress(place) {  // optional parameter
        const addressNameFormat = {
          'street_number': 'short_name',
          'route': 'long_name',
          'locality': 'long_name',
          'administrative_area_level_1': 'short_name',
          'country': 'long_name',
          'postal_code': 'short_name',
        };
        const getAddressComp = function (type) {
          for (const component of place.address_components) {
            if (component.types[0] === type) {
              return component[addressNameFormat[type]];
            }
          }
          return '';
        };
        getFormInputElement('location').value = getAddressComp('street_number') + ' '
                  + getAddressComp('route');
        for (const component of componentForm) {
          // Location field is handled separately above as it has different logic.
          if (component !== 'location') {
            getFormInputElement(component).value = getAddressComp(component);
          }
        }
      }
    }