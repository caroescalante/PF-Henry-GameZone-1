const { getPlatformsApi, savePlatformsDb } = require ("../controllers/platformontroller");
const { Platform } = require ("../db");



const getPlatformHandler = async (req, res) => {
    
    try {
        const platforms = await getPlatformsApi();
        await savePlatformsDb(platforms);

        const allPlatforms = await Platform.findAll();
        return res.status(200).send(allPlatforms);

    } catch ( error ) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = { getPlatformHandler };