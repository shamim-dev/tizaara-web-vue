$("#expo_count_down")
    .countdown("2020/04/02", function(event) {


        $('.days').text(
            event.strftime('%D')
        );

        $('.hours').text(
            event.strftime('%H')
        );

        $('.minutes').text(
            event.strftime('%M')
        );


    });
/*


// Function that executes on click of first next button.
function next_step1() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("active2").style.color = "red";
}
// Function that executes on click of first previous button.
function prev_step1() {
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("active1").style.color = "red";
    document.getElementById("active2").style.color = "gray";
}
// Function that executes on click of second next button.
function next_step2() {
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
    document.getElementById("active3").style.color = "red";
}
// Function that executes on click of second previous button.
function prev_step2() {
    document.getElementById("third").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("active2").style.color = "red";
    document.getElementById("active3").style.color = "gray";
}
//
$('#basic').flagStrap();

$('#origin').flagStrap({
    placeholder: {
        value: "",
        text: "Country of origin"
    }
});

$('#options').flagStrap({
    countries: {
        "AU": "Australia",
        "GB": "United Kingdom",
        "US": "United States"
    },
    buttonSize: "btn-sm",
    buttonType: "btn-info",
    labelMargin: "10px",
    scrollable: false,
    scrollableHeight: "350px"
});
*/
