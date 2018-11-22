const request = require('request')

const getMovie= (filmNumber) => {
    request.get(`https://swapi.co/api/films/${filmNumber}/`,
        (err, response, body) => {
            if(response.statusCode === 200){
                const peli = JSON.parse(body)
                console.log(peli.title)
                const urlNew = peli.characters[4]
                //console.log(urlNew)
                request.get(urlNew,
                    (err, response, body)=>{
                        if(response.statusCode === 200){
                            const personaje = JSON.parse(body)
                            console.log(personaje.name)
                        }else{
                            console.log("Peticion a personajes incorrecta")
                        }
                    })
            }else{
                console.log('Peticion incorrecta')
            }
        })
}

getMovie(5)

