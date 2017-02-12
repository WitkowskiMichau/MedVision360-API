(function () {
    'use strict';
    describe('Charts Service', function () {
        var chartService, $httpBackend;
        beforeEach(module('mv.charts'));


        beforeEach(inject(function (_chartService_, _$httpBackend_) {
            chartService = _chartService_;
            $httpBackend = _$httpBackend_;
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        // I added one example to show that I know something about it - rest will look almost the same

        it('should fetch bp data and process them', function () {
            var expectedData = {
                measurement: [{
                    diastolic: 71,
                    id: "71",
                    systolic: 107,
                    time: "2015-01-02T19:22:33Z"
                }]
            };

            $httpBackend.expectGET('https://dev.medrecord.nl/mrprd/ehr/452/procedure/bloodpressure?limit=100&authToken=helloletmeinplease').respond(200, expectedData);

            chartService.bloodPreassure().then(function (response) {
                expect(response[0].values).toContain({ series: 0, x: new Date(expectedData.measurement[0].time), y: 71, systolic: 107 });
                expect(response[1].values).toContain({ series: 1, x: new Date(expectedData.measurement[0].time), y: 107, diastolic: 71 });
            });

            $httpBackend.flush();
        });

    });
})();
