const utils = require('../../src/utils/versioning');
const API_ERROR_HANDLING = require('../../src/utils/api-error-handling');

describe('convertMiddlewaresIntoFuntion', () => {
    test('entryObject is not an object', () => {
        expect(() => {
            utils.convertMiddlewaresIntoFuntion('ffffff');
        }).toThrow(Error);
    });

    test('entryObject is an object but the values are not functions', () => {
        expect(() => {
            utils.convertMiddlewaresIntoFuntion({
                key: 'ffffff'
            });
        }).toThrow(Error);
    });

    test('entryObject is an object but the values are arrays', () => {
        utils.convertMiddlewaresIntoFuntion({
            key1: [],
            key2: [],
            key3: []
        });
    });

    test('entryObject is an object but the values are functions', () => {
        const result = utils.convertMiddlewaresIntoFuntion({
            key1: jest.fn(),
            key2: jest.fn(),
            key3: jest.fn()
        });
        expect(result).toBeInstanceOf(Object);
    });
});

describe('NoMatchFoundCallback', () => {
    test('Responses 404', () => {
        const response = {
            status: jest.fn(),
            send: jest.fn()
        };
        response.status.mockReturnValue({
            send: response.send
        });
        response.send.mockReturnValue(true);
        utils.NoMatchFoundCallback(jest.fn(), response, jest.fn());
        expect(response.status).toBeCalledWith(404);
        expect(response.send).toBeCalledWith({
            status: 404,
            success: API_ERROR_HANDLING.API_SUCCESS_DEFAULT,
            msg: {
                code: 'VER_001',
                description: 'version not found',
            },
        });
    });
});

describe('handleMiddlewares', () => {
    test('middlewares params is empty array', () => {
        expect(() => {
            utils.handleMiddlewares(jest.fn(), jest.fn(), []);
        }).toThrow(Error);
    });

    test('middlewares params is not an array', () => {
        expect(() => {
            utils.handleMiddlewares(jest.fn(), jest.fn(), {});
        }).toThrow(Error);
    });

    test('middlewares params is an array without functions', () => {
        expect(() => {
            utils.handleMiddlewares(jest.fn(), jest.fn(), [{}]);
        }).toThrow(Error);
    });

    test('middlewares params is array', () => {
        const firstFunction = jest.fn();
        utils.handleMiddlewares(jest.fn(), jest.fn(), [firstFunction]);
        expect(firstFunction).toBeCalled();
    });
});