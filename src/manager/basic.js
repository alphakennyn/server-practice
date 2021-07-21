const catRepository = require('../repository/cats');
const universityRepository = require('../repository/university');

exports.getDate = function () {
    return Date();
};

exports.getCatFact = async function () {
    try {
        const getCatFn = await catRepository
        const { getCatFact } = getCatFn
        const getCatFacts = await getCatFact()
        return getCatFacts
    } catch (e) {
        throw new Error('Error retrieving cat facts')
    }
}

exports.getAllUniversities = async function (country) {
    return await universityRepository.getAllUniversities(country);
}