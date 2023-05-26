const { Router } = require('express');
const router = Router();
const { retrieveTemperatureByName } = require('../daos/weather');

router.get('/', (req, res, next) => {
    try {
        res.render('weather');
    }
    catch (e) {
        console.log("error is: ", e);
    }
});

router.get('/location', async (req, res, next) => {
    console.log("hit get /location");
    const locationName = req.query.name;
    console.log("locationName is ", req.query.name);
    try {
        if (locationName) {
            //res.render('locationWeather', { time: timeStamp, items: ['item one', 'other', 'new item'] });
            const temperature = await retrieveTemperatureByName(locationName);

            textContent = `The weather for ${locationName} is ${temperature ? temperature : "not available"}.`;

            if (temperature)
                res.status(200)
            else
                res.status(404)

            res.render('locationTempature', { textContent: textContent });
        }
        else {
            return res.status(302).redirect('/weather');
        }
    }
    catch (e) {
        console.log("error is: ", e);
    }
});
module.exports = router;