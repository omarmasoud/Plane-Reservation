var key = 'ee36046b-850e-4505-9dc5-574a2e4d15b5';

var flightsArr = [];
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: uluru,
    });
}
function initMap2(flight) {
    // The location of Uluru
    const uluru = { lat: flight.flightInfo.lat, lng: flight.flightInfo.lng };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    const image = "https://en.spitogatos.gr/visualCaptcha/images/airplane.png";
    // The marker, positioned at Uluru
    const from = new google.maps.Marker({
        position: { lat: flight.fromAirport.lat, lng: flight.fromAirport.lng },
        map: map,
    });
    const to = new google.maps.Marker({
        position: { lat: flight.toAirport.lat, lng: flight.toAirport.lng },
        map: map,
    });
    const plane = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image,
    });
}

function requestFlight() {
    $.ajax({
        url: 'https://airlabs.co/api/v9/flights',
        data: {
            api_key: key
        },
        dataType: 'json',
        success: function (apiResponse) {
            console.log(apiResponse);
            if (Array.isArray(apiResponse['data'])) {
                apiResponse['data'].forEach(flight => {
                    if (!flight['live']) {
                        console.log(`${flight['airline']['name']} flight ${flight['flight']['iata']}`,
                            `from ${flight['departure']['airport']} (${flight['departure']['iata']})`,
                            `to ${flight['arrival']['airport']} (${flight['arrival']['iata']}) is in the air.`);
                    }
                });
            }
        }
    });
}


function searchFlights() {
    $("#flight-table > tbody").empty();

    var cityName = $("#city-box").val();
    flightsArr = [];

    var airAjax = $.ajax({
        url: 'https://airlabs.co/api/v9/suggest',
        data: {
            q: cityName,
            api_key: key
        },
        dataType: 'json'
    });

    var fromAir;
    airAjax.done(function (data) {
        data['response']['airports_by_cities'].forEach(airport => {
            if (!airport['iata_code']) {
                return;
            }
            var flightsAjax = $.ajax({
                url: 'https://airlabs.co/api/v9/flights',
                data: {
                    api_key: key,
                    dep_iata: airport['iata_code']
                },
                dataType: 'json'
            });

            flightsAjax.done(function (data) {
                data['response'].forEach(flight => {
                    var arriveAjax = $.ajax({
                        url: 'https://airlabs.co/api/v9/airports',
                        data: {
                            iata_code: flight['arr_iata'],
                            api_key: key
                        },
                        dataType: 'json'
                    });

                    arriveAjax.done(function (data) {
                        flightsArr.push({
                            flightInfo: flight,
                            fromAirport: airport,
                            toAirport: data['response'][0]
                        });
                        renderFlightsCards(flightsArr[flightsArr.length - 1]);
                    });
                });

            });
        });
    });

    function renderFlightsCards(flight) {
        console.log(flight);
        var res = "";

        res += '<tr onclick="draw(' + (flightsArr.length - 1) + ')">';
        res += '<th>' + (flightsArr.length - 1) + '</th>';
        res += '<td>' + flight.flightInfo.flight_number + '</td>';
        res += '<td>' + flight.fromAirport.name + '</td>';
        res += '<td>' + flight.toAirport.name + '</td>';
        res += '</tr>'

        $("#flight-table > tbody").append(res);
    }

}

function draw(item) {
    window.initMap = initMap2(flightsArr[item]);
}