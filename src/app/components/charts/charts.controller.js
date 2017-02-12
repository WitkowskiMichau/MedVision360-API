(function () {
    'use strict';

    angular.module('mv.charts')
        .controller('ChartsController', ChartsController);

    /** @ngInject */
    function ChartsController($state) {
        var vm = this;

        vm.isChartSelected = function () {
            return $state.current.name !== 'charts';
        };
    }
})();
