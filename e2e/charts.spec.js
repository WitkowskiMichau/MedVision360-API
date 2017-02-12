'use strict';

describe('Charts view', function() {
    var page;

    beforeEach(function() {
        browser.get('/index.html');
        page = require('./charts.po');
    });

    it('should show proper information before showing charts', function() {
        expect(page.h1El.getText()).toBe('Charts');
        expect(page.leadEl.getText()).toBe('Choose chart to display');
    });

    it('should change state to BMI', function () {
        page.changeToBMI().then(function () {
            expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/index.html#!/charts/bmi');

            var bmiChart = element(by.id('bmi-chart'));
            expect(bmiChart.isPresent()).toBeTruthy();
        });
    });

    it('should change state to bp', function () {
        page.changeToBP().then(function () {
            expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/index.html#!/charts/bp');

            var bpChart = element(by.id('bp-chart'));
            expect(bpChart.isPresent()).toBeTruthy();
        });
    });

    it('should change state to ACQ', function () {
        page.changeToACQ().then(function () {
            expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/index.html#!/charts/acq');

            var acqChart = element(by.id('acq-chart'));
            expect(acqChart.isPresent()).toBeTruthy();
        });
    });


});
