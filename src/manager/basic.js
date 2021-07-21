const catRepository = require('../repository/cats');
const universityRepository = require('../repository/university');

exports.getDate = function () {
    return Date();
};

exports.getCatFact = async function () {
    try {
        const { getCatFact } = catRepository
        const getCatFacts = await getCatFact()
        return getCatFacts
    } catch (e) {
        throw new Error('Error retrieving cat facts')
    }
}

exports.getAllUniversities = async function (country) {
    try {
        const { getAllUniversities } = universityRepository
        const getUniversities = await getAllUniversities(country)
        return getUniversities 
    } catch (e) {
        throw new Error('Error in retrieving universities')
    }
}