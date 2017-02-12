(function () {
    'use strict';

    angular.module('mv.charts')
        .controller('AcqController', AcqController);

    /** @ngInject */
    function AcqController(chartService) {
        var vm = this;

        vm.$onInit = function () {
            chartService.acq().then(function (response) {
                vm.data = response;
            });
        };

        vm.options = {
            chart: {
                type: 'lineChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 80
                },
                tooltip: {
                    contentGenerator: function (data) {
                        return '<div class="graph-tooltip"><h5>' + moment(data.point.x).format('MMMM Do YYYY, h:mm:ss a') + '</h5><br>'+
                            '<h5>ACQ Score: ' + data.point.y + '</h5>';
                    }
                },
                "useInteractiveGuideline": false,
                x: function (d) {
                    return d.x;
                },
                y: function (d) {
                    return d.y;
                },
                showValues: true,
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'Date of measurement',
                    tickFormat: function (d) {
                        return d3.time.format('%Y-%m-%d')(new Date(d));
                    }
                },
                yAxis: {
                    axisLabel: 'ACQ Score'
                },
                zoom: {
                    enable: true,
                    scaleExtent: [
                        1,
                        10
                    ],
                    useFixedDomain: false,
                    useNiceScale: true,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };

    }
})();
