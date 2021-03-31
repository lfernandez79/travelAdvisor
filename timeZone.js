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
            "x-rapidapi-key": "912f8882abmsh597d3316e2e61bcp121db1jsnabc830ace42d"
        }
    };
}

$("#clockSearchBtn").on("click", function (e) {
    e.preventDefault();
    $("ul").empty();
    var clockCountry = $("#clock-country").val();
    var clockCity = $("#clock-city").val();
    var timezoneSettings = setTimezoneSettings(clockCountry, clockCity);

    // console.log(setimezoneSettings.url);

    $.ajax(timezoneSettings).done(function (response) {
        console.log(response);
        moment(response.datetime, "HH:mm:ss").format("hh:mm A");

        var $clockUl = $("<ul>");
        var $clockLi = $(`<li class="list-unstyled text-regular font-weight-normal">Timezone: ${response.timezone} ${response.abbreviation}</li>
            <li class="list-unstyled text-info font-weight-bold">
            ${(moment(response.datetime.substring(0, response.datetime.length - 13)).format('MMMM Do YYYY, h:mm:ss a'))}
            </li>`);

        console.log(moment(response.datetime.substring(0, response.datetime.length - 13)).format("MMMM Do YYYY, h:mm:ss a"));

        $clockLi.appendTo($clockUl);
        $clockUl.appendTo("#clockZones");
    });
});