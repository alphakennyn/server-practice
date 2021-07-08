const catRepository = require('../repository/cats');
const universityRepository = require('../repository/university');

exports.getDate = function () {
    return Date();
};

exports.getCatFact = async function () {
    return await catRepository.getCatFact();
}

exports.getAllUniversities = async function (country) {
    return await universityRepository.getAllUniversities(country);
}