// ============================================ AIRPORT FINDER =================================================

var theCity;

// BUTTON GRAB VALUE FROM INPUT #CITYNAME
$("#airportBtn").on("click", function (event) {
  // event.preventDefault();
  $("ul").empty();
  theCity = $("#cityName").val();
  
  // AJAX CALL ==========================================
  var settings = {
    "async": true,
    "crossDomain": true,
    url: "https://cors-anywhere.herokuapp.com/https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=" + theCity,
    method: "GET",
    headers: {
      "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
      "x-rapidapi-key": "912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d",
    }
  };
  $.ajax(settings).done(function (response) {
  console.log(response);
    

  // CREATE A UL TO APPEND LIs UNDER, LATER
  var $newUl = $("<ul>")
  
  response.forEach(airport =>  {

    // CREATE LIs TO GRAB INFO FROM ARRAY AND APPENTO UL
      var $newLi = $(`<li class="text-info">${airport.name} / ${airport.code}</li>`); 
      $newLi.appendTo($newUl)
      
      });
 $newUl.appendTo("#airportNames")

    }); 
  })
