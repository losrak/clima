const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async (direccion) => {

    const { lat, lng } = await lugar.getLugarLatLng(argv.direccion);

    if(!(lat && lng)){
        throw new Error(`No hubo respuesta para ${argv.direccion}`);
    }

    const temp = await clima.getClima(lat, lng);

    if(!temp){
        throw new Error('No se pudo determinar el clima');
    }
    console.log('### Resultado satisfactorio ###'.green);
    console.log(`El clima de ${argv.direccion} es: ${ temp }`);

};

getInfo(argv.direccion);

// lugar.getLugarLatLng( argv.direccion)
//     .then( resp => {
//         console.log(resp);
//         clima.getClima(resp.lat, resp.lng)
//             .then( resp => {
//                 console.log(resp);
//             })
//             .catch( err => {
//                 console.warn(err);
//             });
//     })
//     .catch( err => {
//         console.warn(err);
//     });

