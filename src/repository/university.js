const axios = require('axios').default;
const { university } = require('../constants/url.json');

const setupUniversityAxiosOption = (country = '') => {
    const url = country !== '' ? `${university}?country=${country}` : university;
    return {
        method: 'GET',
        url
    }
}

exports.getAllUniversities = async function (country) {
    try {
        const options = setupUniversityAxiosOption(country)
        const { data } = await axios.request(options);
        return data;
    } catch (e) {
        console.error(e.message)
        return e;
    }
}

linh = () => {
    return "hi"
}