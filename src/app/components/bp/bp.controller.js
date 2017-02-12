(function () {
    'use strict';

    angular.module('mv.charts')
        .controller('BpController', BpController);

    /** @ngInject */
    function BpController(chartService) {
        var vm = this;

        vm.$onInit = function () {
            chartService.bloodPreassure().then(function (response) {
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
                "useInteractiveGuideline": false,
                showLegend: true,
                tooltip: {
                    contentGenerator: function (data) {
                        if(angular.isUndefined(data.point.diastolic)) {
                            return '<div class="graph-tooltip"><h5>' + moment(data.point.x).format('MMMM Do YYYY, h:mm:ss a') + '</h5><br>'+
                                '<h5>Blood Pressure: ' + data.point.systolic +'/' + data.point.y + '</h5>';
                        }
                        if(angular.isUndefined(data.point.systolic)) {
                            return '<div class="graph-tooltip"><h5>' + moment(data.point.x).format('MMMM Do YYYY, h:mm:ss a') + '</h5><br>'+
                                '<h5>Blood Pressure: ' + data.point.y + '/' + data.point.diastolic +'</h5>';
                        }

                    }
                },
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
                    axisLabel: 'Blood pressure [mmHg]'
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
