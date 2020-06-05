const axios = require('axios');

const appid = '970984fc2fe1266bfff48f521fc18ad3';
const units = 'metric';

const getClima = async (lat, lng) => {
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}&units=${units}`)
    const clima = resp.data.main.temp;
    return clima;

};

module.exports = {
    getClima
};