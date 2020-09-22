const handler = require('../../../src/sumRoutes/v2.0.0/sum-controller');
const fixtures = require('./fixtures/assets');

describe('handler for sum controller', () => {

    test('successfully request and response [numbers]', () => {
        fixtures.fakeResponse.status.mockReturnValue({
            send: fixtures.fakeResponse.send
        });
        handler(fixtures.fakeResquestNumbersValid, fixtures.fakeResponse, fixtures.next);
        expect(fixtures.fakeResponse.status).toBeCalledWith(200);
        expect(fixtures.fakeResponse.send).toBeCalledWith(16);
        expect(fixtures.next).toBeCalled();
    });

    test('successfully request and response [strings]', () => {
        handler(fixtures.fakeResquestStringValid, fixtures.fakeResponse, fixtures.next);
        expect(fixtures.fakeResponse.status).toBeCalledWith(200);
        expect(fixtures.fakeResponse.send).toBeCalledWith(17);
    });
});
