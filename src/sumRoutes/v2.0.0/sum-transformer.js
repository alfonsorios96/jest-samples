const toInt = (string) => {
    try {
        const number = Number(string);
        if (Number.isNaN(number)) {
            throw new Error('It is not a number');
        }
        return number;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {toInt};
