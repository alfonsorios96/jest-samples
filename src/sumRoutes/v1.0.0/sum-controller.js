const task = require('./sum-task');
const transformer = require('./sum-transformer');

const handler = (request, response, next) => {
    let numbers = request.body.data;
    numbers = numbers.map(number => transformer.toInt(number));
    response = response.status(200);
    response.send(task.sum(...numbers));
    next();
};

module.exports = handler;
