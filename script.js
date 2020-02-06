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

$("#convertBtn").on("click", function() {});

$.ajax(settings).done(function(response) {
	console.log(response);
});
