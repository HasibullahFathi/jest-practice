// /**
//  * @jest-environment jsdom
//  */
const { TestScheduler } = require('jest');
const addition = require('../calc');

describe("Calculator" , () => {
    describe("Addition function", () => {
        test("Should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("Should return 64 for 32 + 32", () => {
            expect(addition(32, 32)).toBe(64);
        });
    });
    describe("Subtruction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
});