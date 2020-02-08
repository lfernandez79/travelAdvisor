
// =========================== AIRPORT FINDER API ===============================
var theCity;

// BUTTON GRAB VALUE FROM INPUT #CITYNAME
$("#airportBtn").on("click", function(event) {
	event.preventDefault();
	$("ul").empty();
    theCity = $("#cityName").val();
    

	// AJAX CALL 
	var settings = {
		async: true,
		crossDomain: true,
		url:
			"https://cors-anywhere.herokuapp.com/https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=" + theCity,
		method: "GET",
		headers: {
			"x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
			"x-rapidapi-key":
				"912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d"
		}
	};
	$.ajax(settings).done(function(response) {
		console.log(response);

		// CREATE A UL TO APPEND LIs UNDER, LATER
		var $newUl = $("<ul>");

		response.forEach(airport => {
			// CREATE LIs TO GRAB INFO FROM ARRAY AND APPENTO UL
			var $newLi = $(
				`<li class="list-unstyled text-seconday">${airport.name} / ${airport.code}</li>`
			);

			$newLi.appendTo($newUl);
		});
		// APPENDTO PAGE
		$newUl.appendTo("#airportNames");

	});
});

// ======================================== TIME ZONE API ============================================-=

function setTimezoneSettings(clockCountry, clockCity) {
    return {
        async: true,
        crossDomain: true,
        url:
            "https://world-time2.p.rapidapi.com/timezone/" +
            clockCountry +
            "/" +
            clockCity,
        method: "GET",
        headers: {
            "x-rapidapi-host": "world-time2.p.rapidapi.com",
            "x-rapidapi-key":
                "d8e913d88bmsha569ef019d6165fp17314bjsnebbde91b52f7"
        }
    };
}


$("#clockSearchBtn").on("click", function (e) {
    event.preventDefault();
    var clockCountry = $("#clock-country").val();
    var clockCity = $("#clock-city").val();
    var timezoneSettings = setTimezoneSettings(clockCountry, clockCity);

    console.log(timezoneSettings.url);

    $.ajax(timezoneSettings).done(function (response) {
        console.log("full response:", response.datetime);
        moment(response.datetime, "HH:mm:ss").format("hh:mm A");

        var $clockUl = $("<ul>");
        var $clockLi = $(`<li class="list-unstyled text-secondary">${response.timezone}</li><p>${
            (moment(response.datetime.substring(0, response.datetime.length - 13)).format('MMMM Do YYYY, h:mm:ss a'))}</p>`);
			
        console.log(
          moment(
            response.datetime.substring(0, response.datetime.length - 13)
          ).format("MMMM Do YYYY, h:mm:ss a")
        );

        $clockLi.appendTo($clockUl);
        $clockUl.appendTo("#clockZones");
    });
});

// ======================================= CURRENCY CONVERSION API ============================================================

var amount;

// BUTTON TO CONVERT CURRENCY, GRAB HTML IDs IN VARIABLES TO BE USE LATER =========================================

$("#convertBtn").on("click", function(event) {
	var cur1 = $("#first-currency").val();
    var cur2 = $("#second-currency").val();
	amount = $("#currency-amount").val();

	// AJAX CALL TO URL, CUR1, CUR2 TAKE ANY VALUE SELECTED ON THE HTML PAGE
	var covSettings = {
    async: true,
    crossDomain: true,
    url:
        "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=" +
        cur1 +
        "&to=" +
        cur2 +
        "&amount=" +
        amount,
    method: "GET",
    headers: {
        "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
        "x-rapidapi-key": "d8e913d88bmsha569ef019d6165fp17314bjsnebbde91b52f7"
    }


  };
		$.ajax(covSettings).done(function(response) {
		console.log(response);

			var $moneyUl = $("<ul>");
			
			// Converted a string into a float.
			var rate = response.rates[cur2].rate_for_amount;
			var parseRate = parseFloat(rate).toFixed(2)
			var rate2 = response.rates[cur2].rate;
			var parseRate2 = parseFloat(rate2).toFixed(2)

			var $moneyli = $(`<li class="list-unstyled text-seconday mt-2">${"Currency Name: " + response.rates[cur2].currency_name}</li>
								<li class="list-unstyled text-secondary">${"Rate amount: " + "$" + parseRate}</li>
								<li class="list-unstyled text-secondary">${"Rate per unit: " + "$" + parseRate2}</li>`);
		
			console.log(response.rates[cur2].rate_for_amount);

			$moneyli.appendTo($moneyUl);
			$moneyUl.appendTo("#currencyConv");
		});
		
	console.log(amount);
});

