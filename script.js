$(document).ready(function () {
    $('.tooltipped').tooltip({
        delay: 50
    });
});

var progressBar = (function initProgressBar() {

    $("#progress-bar").animate({
        'value': 100
    }, 400);

    $("#progress-bar").fadeOut();
})()