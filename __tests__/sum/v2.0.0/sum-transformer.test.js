const transformer = require('../../../src/sumRoutes/v2.0.0/sum-transformer');
const fixtures = require('./fixtures/assets');

describe('toInt method', () => {
    test('Number param', () => {
        expect(transformer.toInt(fixtures.asssetMain.numberParam)).toBe(6);
    });

    test('String valid param', () => {
        expect(transformer.toInt(fixtures.asssetMain.stringValidParam)).toBe(3);
    });

    test('String invalid param', () => {
        // expect always receives only an object or function.
        expect(() => {
            transformer.toInt(fixtures.asssetMain.stringInvalidParam)
        }).toThrow(Error);
    });

    test('String empty param', () => {
        expect(transformer.toInt(fixtures.asssetMain.stringEmptyParam)).toBe(0);
    });
});
