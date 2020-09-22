describe('Routering', () => {
    jest.mock('express', () => {
        return {
            Router: () => {
                return {
                    get: jest.fn()
                };
            }
        }
    });

    test('get', () => {
        const router = require('../../src/sumRoutes/sum-routes');
        expect(router.get).toBeCalled();
    });
});