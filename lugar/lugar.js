const axios = require('axios');

const getLugarLatLng = async ( ubicacion ) => {

    const encodeUrl = encodeURI(ubicacion);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeUrl}`,
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            'x-rapidapi-key': 'fc2c9c4017mshbb2d1ba9e040cb1p16b902jsn6b63669556b4',
            'useQueryString': true
        }
      });
      
    
    const resp = await instance.get();
    if(resp.data.data.length === 0){
        throw new Error(`No hay resultados para ${ubicacion}`);
    }

    const data = resp.data.data[0];
    const direccion = data.name;
    const lat = data.latitude;
    const lng = data.longitude;
      

    return {
        direccion,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLng
};