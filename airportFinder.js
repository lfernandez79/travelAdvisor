
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
        url: "https://airportix.p.rapidapi.com/airport/code/" + theCity + "/",
        method: "GET",
        headers: {
            "x-rapidapi-host": "airportix.p.rapidapi.com",
            "x-rapidapi-key": "912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d"
        },
    };
    $.ajax(settings).done(function (response) {
        console.log(response);

        // CREATE A UL TO APPEND LIs UNDER, LATER
        var $newUl = $("<ul>");

        // CREATE LIs TO GRAB INFO FROM ARRAY AND APPENTO UL
        var $newLi = $(
            `<li id="liName" class="list-unstyled text-regular font-weight-regular">${response.data.name.original},</li>
            <li class="list-unstyled text-info font-weight-regular">City: ${response.data.city.cityOriginal}, ${response.data.stateCode}</li>
            <li class="list-unstyled text-info font-weight-regular">Location: ${response.data.location.latitude}, ${response.data.location.longitude}</li>`
        );
        $newLi.appendTo($newUl);
        // APPENDTO PAGE
        $newUl.appendTo("#airportNames");
    });
});