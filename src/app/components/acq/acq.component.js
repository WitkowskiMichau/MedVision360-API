(function() {
    'use strict';

    angular.module('mv.charts')
        .component('acq', {
            templateUrl: 'app/components/acq/acq.tpl.html',
            controller: 'AcqController',
            controllerAs: 'acq'
        });
})();
