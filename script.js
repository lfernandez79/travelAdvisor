// ============================================ Airport finder =================================================

// var cityName = $("#cityName").val();
// var settings = {
// 	url:
// 		"https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=",
// 	method: "GET",
// 	headers: {
// 		"x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d"
// 	}
// };

// $.ajax(settings).done(function(response) {
// 	console.log(response);

// 	$("#airportBtn").on("click", function() {});

// 	var $newUl = $("<ul>");

// 	response.forEach(airport => {
// 		var $newLi = $(
// 			`<li class="text-info">${airport.name} / ${airport.code}</li>`
// 		);
// 		$newLi.appendTo($newUl);
// 	});
// 	$newUl.appendTo("#airportNames");
// });

// ============================================= World Time =========================================================

// function setTimezoneSettings(clockCountry, clockCity) {
// 	return {
// 		async: true,
// 		crossDomain: true,
// 		url:
// 			"https://world-time2.p.rapidapi.com/timezone/" +
// 			clockCountry +
// 			"/" +
// 			clockCity,
// 		method: "GET",
// 		headers: {
// 			"x-rapidapi-host": "world-time2.p.rapidapi.com",
// 			"x-rapidapi-key":
// 				"d8e913d88bmsha569ef019d6165fp17314bjsnebbde91b52f7"
// 		}
// 	};
// }
// $("#clockSearchBtn").on("click", function(e) {
// 	event.preventDefault();
// 	// $('input[type="text"]').val("");

// 	var clockCountry = $("#clock-country").val();
// 	var clockCity = $("#clock-city").val();
// 	var timezoneSettings = setTimezoneSettings(clockCountry, clockCity);
// 	console.log(timezoneSettings.url);
// 	$.ajax(timezoneSettings).done(function(response) {
// 		console.log("full response:", response.datetime);
// 		moment(response.datetime, "HH:mm:ss").format("hh:mm A");

// 		var date = response.datetime;
// 		var $clockUl = $("<ul>");

// 		var $clockLi = $(
// 			`<li class="text-info">${
// 				response.timezone
// 			}</li><li class="text-info">${
// 				// moment().format(date)
// 				// var date = response.datetime;
// 				response.datetime
// 				// .format(
// 				// 	"dddd, MMMM Do YYYY, h:mm:ss a"
// 				// )
// 				// .utc()
// 				// .format("dddd, MMMM Do YYYY, h:mm a")
// 			}</li>`
// 		);
// 		console.log(
// 			moment(response.datetime, "HH:mm:ss").format("hh:mm A")
// 			// .utc()
// 			// .format()
// 		);

// 		$clockLi.appendTo($clockUl);
// 		$clockUl.appendTo("#clockZones");
// 	});
// });

// ======================================== Currency converter API ============================================-=
var cur1 = $("#first-currency").val();
var cur2 = $("#second-currency").val();
var amount = $("currency-amount").val();
cur1 = EUR;
cur2 = CAD;
var settings = {
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

$.ajax(settings).done(function(response) {
	console.log(response);
});
