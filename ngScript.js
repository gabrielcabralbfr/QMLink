let ngApp = angular.module("ngApp", ["ngRoute"]);

let indexController = ngApp.controller("indexController", function ($scope) {
    $scope.encurtar = function () {
        let urlObj = {
            trueUrl: $('#url').val()
        };

        $.ajax({
                method: 'POST',
                contentType: "application/json",
                url: 'http://localhost:63246/api/url',
                data: JSON.stringify(urlObj)
            })
            .done(function (msg) {
                $('.white-text').text(msg);
            })
            .fail(function () {

                $('.white-text').text("Erro ao encurtar URL");
            })
            .always(function () {
                $('.result-panel').removeClass('fadeOutRight');
                $('.result-panel').addClass('fadeInLeft');
                $('.result-panel').show();
            })
    }

    $scope.hideResult = function () {
        $('.result-panel').removeClass('fadeInLeft');
        $('.result-panel').addClass('fadeOutRight');
        $('.result-panel').fadeOut();
    }
})

let consultaController = ngApp.controller("consultaController", function ($scope) {
    $scope.urlEncurtadas =
        $.get('http://localhost:63246/api/url')
        .done(function (data) {
            $scope.urlEncurtadas = data
        })
        .fail(function () {
            alert("Erro no Get")
        })
})

ngApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/encurtadas', {
        templateUrl: "url-encurtadas.html",
        controller: "consultaController"
    }).otherwise({
        templateUrl: "main.html",
        controller: "indexController"
    })
}]);