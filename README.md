## Jest samples

This guide is a support for write unit testing in jest on a nodeJS project

### Config

See `jest.config.js` file.

| Parameter  | Description |
| ------------- | ------------- |
| collectCoverage  | Creates a HTML report for coverage in `/coverage/Icov-report/index.html`  |
| verbose  | Create a detail information about tests  |
| testRegex  | ReGex for file names will be tested  |
| moduleDirectories  | Files and node_modules/ directory for modules resolutions  |
| modulePathIgnorePatterns  | Directories will not tested  |
| collectCoverageFrom  | Src will be considered in coverage  |
| coverageThreshold  | % minimum for a good quality  |


### Creating a unit test

1. Create a file inside `__tests__` directory with the extension `.test.js`
1. Create the next structure:

```js
describe('Method name to testing', () => {
    tests('Particular case for testing in this method/function', () => {
        // Remember considering all branches (conditionals) and exceptions
        // See __tests__/sum/v1.0.0/sum-transformer.test.js for more examples
    });
});
```

Run tests with your terminal

```shell script
yarn test
npm test
```

### How works unit testing

To below you're going to find hints to win in Unit Testing and prevent fail to trying.

#### Expects or matchers

### .toStrictEqual(value)

Use this when you're matching a primitive value.

E.g. Strings, numbers, booleans.

```javascript
expect(variable).toStrictEqual(expectedValue);
```

### .toEqual(value)

Use this when you're matching a complex variable.

E.g. Object, Array, ...

```javascript
expect(variable).toStrictEqual(expectedValue);
```

### .toThrow(error?)

Use this when you're matching a throwing exceptions Error

E.g.

```javascript
function drinkFlavor(flavor) {
  if (flavor === 'octopus') {
    throw new DisgustingFlavorError('yuck, octopus flavor');
  }
}
```
``.test.js``

```javascript
expect(drinkOctopus).toThrowError(new Error('yuck, octopus flavor'));
```

#### Objects to testing

### jest.fn()

Use this method to create a dummy (fake and unfunctionally function instance).

E.g.

```js
handleRequest(request, response, next){
    // stuff
}
```

Maybe, you only require ``response`` object for your test. So, you can use `jest.fn()` for emulate and fill the other params.

```javascript
handleRequest(jest.fn(), response, jest.fn());
```

### jest.mock()

Use this method when you need simulate a external behavior. Suppose, you are going to emulate a response behavior in express. So, you require ``status() and send() methods`` from express.

E.g.

```javascript
const response = {
    status: jest.fn(),
    send: jest.fn()
};
response.status.mockReturnValue({
    send: response.send
});
```

When you invoke ``response.status(200).send(obj)`` you could listene the next matchers:

```javascript
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
```

For more detail, please see the implements in ``versioning.test.js``

