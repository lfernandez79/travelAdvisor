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

var clockCountry = $("#clock-country").val();
var clockCity = $("#clock-city").val();

var timezoneSettings = {
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
		"x-rapidapi-key": "d8e913d88bmsha569ef019d6165fp17314bjsnebbde91b52f7"
	}
};

$.ajax(timezoneSettings).done(function(response) {
	console.log(response);

	$("#clockSearchBtn").on("click", function() {
		var $clockUl = $("<ul>");

		response.forEach(clock => {
			var $clockLi = $(`<li class="text-info">${clock.timezone}</li>`);
			$clockLi.appendTo($clockUl);
		});
		$clockUl.appendTo("#clockZones");
	});
});

// ======================================== Currency converter API ============================================-=

// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://currency-converter5.p.rapidapi.com/currency/historical/2018-02-09?format=json&to=AUD&from=AUD&amount=1",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
//         "x-rapidapi-key": "912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d"
//     }
// }

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

// var granimInstance = new Granim({
// 	element: "#canvas-basic",
// 	direction: "left-right",
// 	isPausedWhenNotInView: true,
// 	states: {
// 		"default-state": {
// 			gradients: [
// 				["#ff9966", "#ff5e62"],
// 				["#00F260", "#0575E6"],
// 				["#e1eec3", "#f05053"]
// 			]
// 		}
// 	}
// });
