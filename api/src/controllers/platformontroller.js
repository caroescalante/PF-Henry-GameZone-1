const axios = require ("axios");
const { Platform } = require ("../db");
const { API_KEY } = process.env;

const getPlatformsApi = async () => {

    const platformsApi = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
    return platformsApi.data.results
};

const savePlatformsDb = async (platforms) => {

    for (let i=0; i<platforms.length; i++) {
        const platform = platforms[i];
        await Platform.findOrCreate({ where: {name: platform.name}});
    };
};

module.exports = { getPlatformsApi, savePlatformsDb };