// ============================================ Airport finder =================================================


var cityName = $("#cityName").val();
var settings = {

  url:"https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=Dallas",
  method: "GET",
  headers: {
    "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com" ,    
    "x-rapidapi-key": "912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d"
  }
};



$.ajax(settings).done(function (response) {
  console.log(response);

  $("#airportBtn").on("click", function(){

  })

  var $newUl = $("<ul>")
  
  response.forEach(airport => {

      var $newLi = $(`<li class="text-info">${airport.name} / ${airport.code}</li>`); 
      $newLi.appendTo($newUl)
      
      });
 $newUl.appendTo("#airportNames")

    }); 
      
    
// ============================================= World Time =========================================================


// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://world-time2.p.rapidapi.com/timezone/Europe/London",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "world-time2.p.rapidapi.com",
//         "x-rapidapi-key": "912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d"
//     }
// }

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

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
