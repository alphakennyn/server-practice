const axios = require('axios');
const { catFacts } = require('../constants/url.json');

exports.getCatFact = async function () {
    try {
        const { data } = await axios(catFacts);
        const justFacts = data.fact;

        return justFacts;
    } catch (e) {
        console.error(e.message)

        return e;
    }
}

