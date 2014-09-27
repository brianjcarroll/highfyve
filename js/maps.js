      var map;
      var marker;

      function initialize() {
        var mapOptions = {
          zoom: 16,
          mapTypeControl: false,
          streetViewControl: false,
          overviewMapControl: false
        };

        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        

        // Try HTML5 geolocation
        if(navigator.geolocation) {
          var myLatLng = navigator.geolocation.getCurrentPosition(function(position){

          });

          var watchID = navigator.geolocation.watchPosition( gotPos, gotErr );

          function gotPos(pos){
            var crd = pos.coords;
            console.log(crd.latitude, crd.longitude);
          };

          function gotErr(err){
            console.warn('ERROR(' + err.code + '): ' + err.message);
          };
          
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var marker = new google.maps.Marker({
              position: pos,
              map: map,
              title:"Hello World!"
            });

            map.setCenter(pos);
          }, function() {
            handleNoGeolocation(true);
          });
        } else {
          // Browser doesn't support Geolocation
          handleNoGeolocation(false);
        }
      }

      function handleNoGeolocation(errorFlag) {
        if (errorFlag) {
          var content = 'Error: The Geolocation service failed.';
        } else {
          var content = 'Error: Your browser doesn\'t support geolocation.';
        }

        var options = {
          map: map,
          position: new google.maps.LatLng(60, 105),
          content: content
        };

        var infowindow = new google.maps.InfoWindow(options);
        map.setCenter(options.position);
      }

      google.maps.event.addDomListener(window, 'load', initialize);
