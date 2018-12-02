const express = require('express');
const bodyParser = require('body-parser');

const { Pelicula } = require('./mongooseClient');

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/',(req, res)=>{
    res.send({message: 'index'})
})

//Primer post a la BD
app.post('/api/v1/pelicula', (req, res)=>{
    const {titulo, year, descripcion, portadas, genero, director} = req.body;
    const nuevaPelicula = Pelicula({
        titulo, 
        year, 
        descripcion, 
        portadas, 
        genero, 
        director
    })
    nuevaPelicula.save((err, pelicula)=>{
        err ? res.status(409).send(err) : res.send(pelicula)
    })
});

//Primer GET ALL(List) de la BD
app.get('/api/v1/pelicula', (req,res) => {
    Pelicula.find().exec()
        .then(peliculas => res.status(200).send(peliculas))
        .catch(err => res.status(409).send(err))
})

//Primer GET de la BD
app.get('/api/v1/busqueda/pelicula', (req,res) =>{
    const { q } = req.query
    Pelicula.find({year : q}).exec()
        .then(peliculas => res.status(200).send(peliculas))
        .catch(err => res.status(409).send(err))
})

//Primer PUT a la BD
app.put('/api/v1/pelicula/:uid', (req,res) => {
    const {uid} = req.params
    Pelicula.findByIdAndUpdate(uid, { $set : req.body}, {new:true}).exec()
        .then(newPeli => res.status(201).send(newPeli))
        .catch(err => res.status(409).send(err))
})

//GET BY ID a la BD
app.get('/api/v1/pelicula/:uid',(req,res)=>{
    const {uid} = req.params
    Pelicula.findById(uid).exec()
        .then(pelicula => {
            pelicula
            ?   res.status(200).send(pelicula)
            :   res.status(404).send({message : 'ERROR: Pelicula no encontrada'})
        })
        .catch(err => {
            res.status(409).send(err)
        });
});

//DELETE a la BD
app.delete('/api/v1/pelicula/:uid', (req, res) => {
    const {uid} = req.params
    Pelicula.findByIdAndRemove(uid).exec()
        .then(pelicula => {
            res.status(204).send({
                message : "Pelicula borrada exitosamente",
                body : pelicula
            })
        })
        .catch(err => {
            res.status(404).send(err)
        });
});


app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})


