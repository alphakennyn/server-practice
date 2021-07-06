const catRepository = require('../repository/cats');

exports.getDate = function () {
    return Date();
};

exports.getCatNames = async function (count) {
    return await catRepository.getCatFacts(count)
}