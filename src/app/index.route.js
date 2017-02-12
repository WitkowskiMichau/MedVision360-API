(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('charts', {
                url: '/charts',
                component: 'charts'
            })
            .state('bmi', {
                url: '/bmi',
                parent: 'charts',
                component: 'bmi'
            })
            .state('bp', {
                url: '/bp',
                parent: 'charts',
                component: 'bp'
            })
            .state('acq', {
                url: '/acq',
                parent: 'charts',
                component: 'acq'
            });

        $urlRouterProvider.otherwise('/charts');
    }

})();
