const request = require('request')
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/'

getAllAutores = () => {
    const URI = 'authors/'
    return new Promise((resolve, reject) => {
        request.get(`${URL_BASE}${URI}`,(err, response, body) => {
            const json  = JSON.parse(body);
            //console.log(json)
            //console.log(response.statusCode)
            response.statusCode === 200
            ? resolve(json)
            : reject('Error en el GET')
        });
    });
}

// getAllAutores().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

createAuthor = (nombre, apellidos, bio, genero, edad) => {
    const URI = 'authors/'
    const autorAEnviar = {
        name : nombre,
        last_name : apellidos,
        nacionalidad : 'MX',
        biography : bio,
        gender : genero,
        age : edad
    }
    const URL = `${URL_BASE}${URI}`
    return new Promise((resolve,reject)=>{
        request.post({url: URL, form: autorAEnviar}, (err, response, body)=>{
            const json = JSON.parse(body)
            console.log(response.statusCode)
            response.statusCode === 201
            ? resolve(json)
            : reject(err)
        });
    });
}


// createAuthor('Gerardo', 
//     'Arjona', 
//     'Este el primer post del BATCH 25 Cinta Roja',
//     'M', 
//     21)
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

getAutorById = (id) => {
    const URI = 'authors/'
    return new Promise((resolve, reject) => {
        request.get(`${URL_BASE}${URI}${id}`,(err, response, body) => {
            const json = JSON.parse(body)
            response.statusCode === 200
            ? resolve(json)
            : reject(err)
        })
    })

}

// getAutorById('1700').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

updateAutor = (id, name, last_name, biography, gender, age) => {
    const URI = 'authors/'
    const autorNuevo = {
        name,
        last_name,
        nacionalidad : 'MX',
        biography,
        gender,
        age
    }
    const URL = `${URL_BASE}${URI}${id}/`
    console.log(URL)
    return new Promise((resolve,reject)=>{
        request.put({url: URL, form: autorNuevo}, (err, response, body) => {
            console.log(body)
            const json = JSON.parse(body)
            console.log(response.statusCode)
            //console.log(response)
            response.statusCode === 200
            ? resolve(json)
            : reject(err)
        });
    });

}

// updateAutor('1694', 'Prueba', 'desde node', 'Este update', 'F', '100').then((res) => {
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// })

deleteAutorById = (id) => {
    const URI = 'authors/'
    return new Promise((resolve, reject) => {
        request.delete(`${URL_BASE}${URI}${id}/`,(err, response, body) => {
            console.log(body)
            //const json = JSON.parse(body)
            response.statusCode === 200
            ? resolve(response.statusCodecl)
            : reject(err)
        })
    })

}

deleteAutorById('1694').then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})