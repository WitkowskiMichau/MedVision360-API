(function() {
    'use strict';

    angular.module('mv.charts')
        .component('bmi', {
            templateUrl: 'app/components/bmi/bmi.tpl.html',
            controller: 'BmiController',
            controllerAs: 'bmi'
        });
})();
