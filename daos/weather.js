const weather = require('../models/weather');

module.exports.retrieveTemperatureByName = async (name) => {
    var result = await weather.findOne({ name: name });
    return result?.temperature;
}
