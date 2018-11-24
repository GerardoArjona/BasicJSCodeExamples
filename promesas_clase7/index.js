const request = require('request')

const getName = (numPersonaje) => {
    return new Promise((resolve, reject) => {
        request.get(`https://swapi.co/api/people/${numPersonaje}/`, (err, response, body) => {
            const personaje = JSON.parse(body)
            //console.log(response.statusCode == 200)
            response.statusCode == 200
                ? resolve(personaje)
                : reject('Error en getName')
        });
    });
}

const getNameFilm = (urlFilm) => {
    return new Promise((resolve, reject) => {
        request.get(urlFilm, (err,response, body) => {
            const pelicula = JSON.parse(body)
            response.statusCode == 200
            ? resolve(pelicula)
            : reject('Error en getName')
        });
    });
}

// getName().then((respuesta)=>{
//     console.log(respuesta.name)
//     getNameFilm(respuesta.films[0]).then((respuestaFilm)=>{
//         console.log(respuestaFilm.title)
//     }).catch(()=>{
//         console.log(err)
//     });
// }).catch((err)=>{
//     console.log(err)
// });

getName(76).then((respuesta)=>{
    console.log(respuesta.name)
    return getNameFilm(respuesta.films[0])
}).then((film)=>{
    console.log(film.title)
}).catch((err)=>{
    console.log(err)
});