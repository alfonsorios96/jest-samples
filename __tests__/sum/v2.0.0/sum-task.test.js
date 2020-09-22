const task = require('../../../src/sumRoutes/v2.0.0/sum-task');
const fixtures = require('./fixtures/assets');

describe('sum method', () => {
    test('No params case', () => {
        const a = 0;
        const b = 0;
        const c = 0;
        expect(task.sum(a,b,c)).toBe(0);
    });

    test('One param case', () => {
        const a = fixtures.asssetMain.oneParam[0];
        const b = 0;
        const c = 0;
        expect(task.sum(a,b,c)).toBe(3);
    });

    test('Two params case', () => {
        const a = fixtures.asssetMain.twoParams[0];
        const b = fixtures.asssetMain.twoParams[1];
        const c = 0;
        expect(task.sum(a,b,c)).toBe(9);
    });

    test('Three params case', () => {
        const a = fixtures.asssetMain.threeParams[0];
        const b = fixtures.asssetMain.threeParams[1];
        const c = fixtures.asssetMain.threeParams[2];
        expect(task.sum(a,b,c)).toBe(26);
    });
});
