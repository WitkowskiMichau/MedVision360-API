(function () {
    'use strict';
    angular.module('mv.charts')
        .factory('chartService', chartService);

    /** @ngInject */
    function chartService($http) {

        return {
            bloodPreassure : bloodPreassure,
            bmi : bmi,
            acq : acq
        };

        function bloodPreassure() {
            return $http.get('https://dev.medrecord.nl/mrprd/ehr/452/procedure/bloodpressure?limit=100&authToken=helloletmeinplease')
                .then(function (response) {
                    return processBloodPressure(response.data.measurement);
                });
        }

        function bmi() {
            return $http.get('https://dev.medrecord.nl/mrprd/ehr/452/procedure/bmi?authToken=helloletmeinplease')
                .then(function (response) {
                    return processBmi(response.data.measurement);
                });
        }

        function acq() {
            return $http.get('https://dev.medrecord.nl/mrprd/ehr/452/procedure/acq?authToken=helloletmeinplease')
                .then(function (response) {
                    return processAcq(response.data.measurement);
                });
        }

        function processAcq(dataArray) {
            var acqSeries = {color: '#1e850e', key: 'ACQ Score', values: []};

            for (var i = 0; i < dataArray.length; i++) {
                var tempAcqItem = {
                    series: 0,
                    x: new Date(dataArray[i].time),
                    y: dataArray[i].acqScore
                };
                acqSeries.values.push(tempAcqItem);
            }

            return [acqSeries];
        }

        function processBloodPressure(dataArray) {
            var diastolicSeries = {color: '#1e850e', key: 'diastolic', values: []};
            var systolicSeries = {color: '#00856b', key: 'systolic', values: []};

            for (var i = 0; i < dataArray.length; i++) {
                var tempDistolicItem = {
                    series: 0,
                    x: new Date(dataArray[i].time),
                    y: dataArray[i].diastolic,
                    systolic: dataArray[i].systolic
                };
                var tempSytolicItem = {
                    series: 1,
                    x: new Date(dataArray[i].time),
                    y: dataArray[i].systolic,
                    diastolic: dataArray[i].diastolic
                };
                diastolicSeries.values.push(tempDistolicItem);
                systolicSeries.values.push(tempSytolicItem);
            }

            return [diastolicSeries, systolicSeries];
        }


        function processBmi(dataArray) {
            var bmiSeries = {color: '#1e850e', key: 'BMI', values: []};

            for (var i = 0; i < dataArray.length; i++) {
                var tempBmiItem = {
                    series: 0,
                    x: new Date(dataArray[i].time),
                    y: dataArray[i].bmi,
                    weight: Math.round(dataArray[i].weight * 100) / 100 + ' ' + dataArray[i].weightUnit,
                    height: dataArray[i].height + ' ' + dataArray[i].heightUnit
                };
                bmiSeries.values.push(tempBmiItem);
            }

            return [bmiSeries];
        }
    }
})();
