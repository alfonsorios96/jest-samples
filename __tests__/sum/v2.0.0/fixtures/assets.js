const asssetMain = {
    noParams: [],
    oneParam: [3],
    twoParams: [7,2],
    threeParams: [8,18,0],
    stringValidParam: '3',
    stringInvalidParam: 'f',
    stringEmptyParam: '',
    numberParam: 6
};

const fakeResquestNumbersValid = {
    body: {
        data: [1,6,9]
    }
};

const fakeResquestStringValid = {
    body: {
        data: ['5','3','9']
    }
};

const fakeResponse = {
    status: jest.fn(),
    send: jest.fn()
};

const next = jest.fn();

module.exports = {
    asssetMain,
    fakeResquestNumbersValid,
    fakeResquestStringValid,
    fakeResponse,
    next
};
