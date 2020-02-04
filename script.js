// ======================================== Currency converter API ============================================-=

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://currency-converter5.p.rapidapi.com/currency/historical/2018-02-09?format=json&to=AUD&from=AUD&amount=1",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
        "x-rapidapi-key": "912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

// ============================================ Airport finder =================================================
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=Atlanta",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
        "x-rapidapi-key": "912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

// ============================================= World Time =========================================================

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://world-time2.p.rapidapi.com/timezone/Europe/London",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "world-time2.p.rapidapi.com",
        "x-rapidapi-key": "912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});