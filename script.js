$('.result-panel').hide();

$(document).ready(function () {
    let urlField = document.getElementById("url"); {

        $(document).on('click', 'a.btn', function () {
            if ($('#url').val() == "") {
                urlField.setCustomValidity("error");
                // alert("Caralho")

            } else {
                $('.result-panel').removeClass('fadeOutRight');
                $('.result-panel').addClass('fadeInLeft');
                $('.result-panel').show();
            }


        })

        $(document).on('keyup', 'input#url', function () {
            $('.result-panel').removeClass('fadeInLeft');
            $('.result-panel').addClass('fadeOutRight');
            $('.result-panel').fadeOut();

        })
    }
})

$("#progress-bar").animate({
    'value': 100
});

$(document).on('progressbarcomplete', '#progress-bar', function () {
    $("#progress-bar").hide();

})