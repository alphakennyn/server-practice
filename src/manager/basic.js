const catRepository = require('../repository/cats');

exports.getDate = function () {
    return Date();
};

exports.getCatFact = async function () {
    return await catRepository.getCatFact();
}