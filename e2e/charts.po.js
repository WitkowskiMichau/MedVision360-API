/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var Charts = function() {
    this.jumbEl = element(by.css('.jumbotron'));
    this.h1El = this.jumbEl.element(by.css('h1'));
    this.leadEl = this.jumbEl.element(by.css('h4'));
    this.navEl = element(by.className('navbar-nav'));
    this.chartEl = element(by.css('nvd3'));

    this.changeToBMI = function () {
        this.bmiEl = this.navEl.element(by.id('bmi-nav'));
        this.bmiEl.click();

        return browser.waitForAngular();
    };
    this.changeToBP = function () {
        this.BPEl = this.navEl.element(by.id('bp-nav'));
        this.BPEl.click();

        return browser.waitForAngular();
    };
    this.changeToACQ = function () {
        this.ACQEl = this.navEl.element(by.id('acq-nav'));
        this.ACQEl.click();

        return browser.waitForAngular();
    };
};

module.exports = new Charts();
