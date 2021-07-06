const axios = require('axios');
const { catFacts } = require('../constants/url.json');

exports.getCatFacts = async function (count) {
    try {
        const { data } = await axios(catFacts);
        const justFacts = data.slice(0, count).map(({ text }) => text);

        return justFacts;
    } catch (e) {
        console.error(e.message)

        return [];
    }
}