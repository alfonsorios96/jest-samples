const routesVersioning = require('express-routes-versioning')();
const API_ERROR_HANDLING = require('../utils/api-error-handling');

/**
 * handle of array of functions
 *
 * @param {*} req req object from express
 * @param {*} res res object from express
 * @param {*} middlewares array of functions
 */
function handleMiddlewares(req, res, middlewares) {
    let i = 0;
    const checkNextFunctionOfMiddlewares = () => {
        if (typeof middlewares[i + 1] === 'function') {
            i++;
            middlewares[i](req, res, next);
        }
    };
    const next = () => {
        checkNextFunctionOfMiddlewares();
    };
    if (Array.isArray(middlewares) && middlewares.length > 0) {
        const [firstFuntion] = middlewares;
        if (typeof firstFuntion === 'function') {
            firstFuntion(req, res, next);
        } else throw new Error('first element of middlewares is not a function');
    } else throw new Error('middlewares is not an array or is empty');
}
/**
 * convert middlewares (array of functions) from versions object into function in order to support middlewares in express-routes-versioning
 *
 * @param {*} entryObject e.g { "^1.0.0": functionV1, "~2.0.0": middlewareV2, "3.0.0": functionV3 }
 */
function convertMiddlewaresIntoFuntion(entryObject) {
    if (typeof entryObject !== 'object') throw new Error('entry object param must to be an object');
    let newObject = {};
    Object.keys(entryObject).map((key) => {
        const handler = entryObject[key];
        if (Array.isArray(handler)) {
            //handler is a middleware
            newObject[key] = (req, res) => handleMiddlewares(req, res, handler);
        } else if (typeof handler === 'function') {
            newObject[key] = handler;
        } else throw new Error('the value of object must be a function');
    });
    return newObject;
}

/**
 * If version not found, will send a 404 error(version not found).
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

function NoMatchFoundCallback(req, res, next) {
    res.status(404).send({
        status: 404,
        success: API_ERROR_HANDLING.API_SUCCESS_DEFAULT,
        msg: {
            code: 'VER_001',
            description: 'version not found',
        },
    });
}

/**
 * Send all versions that we need use.
 *
 * @param {*} versions e.g { "^1.0.0": respondV1, "~2.0.0": respondV2, "3.0.0": respondV3 }
 */
const version = (versions) => routesVersioning(convertMiddlewaresIntoFuntion(versions));

exports.handleMiddlewares = handleMiddlewares;
exports.convertMiddlewaresIntoFuntion = convertMiddlewaresIntoFuntion;
exports.NoMatchFoundCallback = NoMatchFoundCallback;
exports.versioning = version;
