var defaultLat, defaultLong;
var pinData;

$(document).ready(function () {

    // AJAX request for XML file
    $.ajax({
        url: 'data.xml',
        async: false,
        dataType: "xml",
        success: parseXml
    });

    // Parse XML data
    function parseXml(xml) {

        // Get default location
        var mapLocation = $(xml).find("MapLocation");
        if (mapLocation.text() == "US") {
            defaultLat = 39.3683;
            defaultLong = -95.2734;
        }

        // Get pin data
        pinData = $(xml).find("PinData");

    }

    // Prevent rotating the map
    var interactions = ol.interaction.defaults({ pinchRotate: false });

    // Set map view
    var view = new ol.View({
        center: ol.proj.transform([defaultLong, defaultLat], 'EPSG:4326', 'EPSG:3857'),
        zoom: 4.75
    });

    // Load the map
    var map = new ol.Map({
        controls: [],
        interactions: interactions,
        layers: [
          new ol.layer.Tile({
              source: new ol.source.XYZ({
                  url: 'http://api.tiles.mapbox.com/v4/vbushong.1f739029/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmJ1c2hvbmciLCJhIjoiSnFXelRLQSJ9.SU5XJzvmhzm1lUAe1ACOEA'
              })
          })
        ],
        target: 'map',
        view: view
    });

    // Use the pin data to create overlays on the map
    var i = 0;
    pinData.each(function () {

        var lat, long;

        // Get the lat long
        if ($(this).find("PinLocation").text() == "Team Stadium/Arena")
        {
            var location = getNFLStadiumLocation($(this).find("TeamName").text());
            lat = location.Latitude;
            long = location.Longitude;
        }

        // Add a pin element to the dom
        var pin = document.createElement('div');
        pin.setAttribute('id', "pin" + i);
        pin.setAttribute('class', 'marker');
        pin.setAttribute('data-lat', lat);
        pin.setAttribute('data-long', long);
        pin.onclick = function () {
            pinTap(this);
        };
        document.getElementById('pins').appendChild(pin);

        // Add the element to the map
        var marker = new ol.Overlay({
            position: ol.proj.transform([long, lat], 'EPSG:4326', 'EPSG:3857'),
            positioning: 'center-center',
            element: document.getElementById("pin" + i),
            stopEvent: false
        });
        map.addOverlay(marker);

        i++;
    });

    function pinTap(pin)
    {
        var lat = $(pin).attr('data-lat');
        var long = $(pin).attr('data-long');

        var duration = 500;
        var start = +new Date();
        var pan = ol.animation.pan({
            duration: duration,
            source: (view.getCenter()),
            start: start
        });
        var zoom = ol.animation.zoom({
            duration: duration,
            resolution: map.getView().getResolution(),
            start: start
        });
        map.beforeRender(pan, zoom);
        
        view.setCenter(ol.proj.fromLonLat([parseFloat(long), parseFloat(lat)]));
        view.setZoom(8);
    }

});