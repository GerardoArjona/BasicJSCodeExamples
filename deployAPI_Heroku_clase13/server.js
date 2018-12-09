const express = require('express')
const bodyParser = require('body-parser')
const{Alumno, Curso} = require('./mongooseClient')

const app = express()

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))
//parse application/json
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    const json = req.body

    const nuevoAlumno = Alumno(json)

    nuevoAlumno.save((err, alumno)=>{
        err 
        ? res.status(409).send(err) 
        : res.status(201).send({message : "Funciona server"})
    });
});


//CRUD ALUMNOS

//CREATE ALUMNO
app.post('/devf/api/v1/alumnos', (req, res)=>{
    const json = req.body

    const nuevoAlumno = Alumno(json)

    nuevoAlumno.save((err, alumno)=>{
        err 
        ? res.status(409).send(err) 
        : res.status(201).send(alumno)
    });
});

//READ (GET ALL) alumno
app.get('/devf/api/v1/alumnos', (req, res)=>{
    Alumno
        .find()
        .populate('cursos')
        .exec()
        .then(alumnos => {
            res.status(200).send(alumnos)
        })
        .catch( error => res.status(404).send(error))
})

//GET BY ID
app.get('/devf/api/v1/alumnos/:id', (req, res)=>{
    const alumnoId = req.params.id;

    Alumno
        .findById(alumnoId)
        .populate('cursos')
        .exec()
        .then(alumno => {
            res.status(200).send(alumno)
        })
        .catch( error => res.status(404).send(error))
})

//UPDATE Alumno
app.put('/devf/api/v1/alumnos/:id', (req, res)=>{
    const alumnoId = req.params.id;

    Alumno
        .findByIdAndUpdate(
            alumnoId,
            {$set : req.body},
            {new : true}
        )
        .populate('cursos')
        .exec()
        .then( alumnoActualizado => {
            res.status(200).send(alumnoActualizado)
        })
        .catch(error => res.status(400).send(error))
})

//DELETE Alumno
app.delete('/devf/api/v1/alumnos/:id', (req, res)=>{
    const alumnoId = req.params.id;

    Alumno
        .findByIdAndRemove(alumnoId)
        .exec()
        .then( alumnoEliminado => {
            res.status(204).send({
                message : "Alumno borrado exitosamente"
            })
        })
        .catch(error => res.status(404).send(error))
})

//CRUD CURSOS
//Create

app.post('/devf/api/v1/cursos', (req, res)=>{
    const json = req.body

    const nuevoCurso = Curso(json)

    nuevoCurso.save((err, curso)=>{
        err 
        ? res.status(409).send(err) 
        : res.status(201).send(curso)
    });
});

//GET ALL CURSOS

app.get('/devf/api/v1/cursos', (req, res)=>{
    Curso
        .find()
        .exec()
        .then(cursos => {
            res.status(200).send(cursos)
        })
        .catch( error => res.status(404).send(error))
})

//GET BY ID
app.get('/devf/api/v1/cursos/:id', (req, res)=>{
    const cursoId = req.params.id;

    Curso
        .findById(cursoId)
        .exec()
        .then(curso => {
            res.status(200).send(curso)
        })
        .catch( error => res.status(404).send(error))
})

//UPDATE Alumno
app.put('/devf/api/v1/cursos/:id', (req, res)=>{
    const cursoId = req.params.id;

    Curso
        .findByIdAndUpdate(
            cursoId,
            {$set : req.body},
            {new : true}
        )
        .exec()
        .then( cursooActualizado => {
            res.status(200).send(cursoActualizado)
        })
        .catch(error => res.status(400).send(error))
})

//DELETE Alumno
app.delete('/devf/api/v1/cursos/:id', (req, res)=>{
    const cursoId = req.params.id;

    Curso
        .findByIdAndRemove(cursoId)
        .exec()
        .then( cursoEliminado => {
            res.status(204).send({
                message : "Alumno borrado exitosamente"
            })
        })
        .catch(error => res.status(404).send(error))
})

//use port 3000 unless there exists a preconfigured port
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})