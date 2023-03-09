
// =========================== AIRPORT FINDER API ===============================
var theCity;

// BUTTON GRAB VALUE FROM INPUT #CITYNAME

$("#airportBtn").on("click", function (event) {
    event.preventDefault();
    $("ul").empty();
    theCity = $("#cityName").val();
    
    // AJAX CALL 
    var settings = {
        async: true,
        crossDomain: true,
        url: "https://airport-info.p.rapidapi.com/airport?iata=" + theCity + "",
        method: "GET",
        headers: {
            "x-rapidapi-host": "airport-info.p.rapidapi.com",
            "x-rapidapi-key": "912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d"
        },
    };
    console.log(settings.url);
    
    $.ajax(settings).done(function (response) {
        console.log(response);

        // CREATE A UL TO APPEND LIs UNDER, LATER
        var $newUl = $("<ul>");

        // CREATE LIs TO GRAB INFO FROM ARRAY AND APPENTO UL
        var $newLi = $(
            `<li id="liName" class="list-unstyled text-regular font-weight-regular">${response.name},</li>
            <li class="list-unstyled font-weight-regular">${response.street_number}, ${response.street}</li>
            <li class="list-unstyled font-weight-regular">${response.city} ${response.state}, ${response.postal_code}</li>
            <li class="list-unstyled font-weight-regular">${response.phone}</li>
            <li class="list-unstyled font-weight-regular">${response.website}</li>`
        );
        $newLi.appendTo($newUl);
        // APPENDTO PAGE
        $newUl.appendTo("#airportNames");
    });
});