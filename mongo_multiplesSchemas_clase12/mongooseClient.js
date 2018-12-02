const mongoose = require('mongoose');

const URL = 'mongodb://gerardo:1q2w3e4r5t6y@ds037087.mlab.com:37087/devf_batch25_cintaroja';

mongoose.connect(URL,{useNewUrlParser: true}, ()=>{
    console.log("Conexion exitosa a la BD");
});

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const alumnoSchema = Schema({
    alumnno : ObjectId,
    nombre : String,
    apellidos : String,
    edad : {type : Number},
    genero : String,
    cursos : {
        type : ObjectId,
        ref : 'Curso'
    } 
});

const cursoSchema = Schema({
    curso : ObjectId,
    nombre : String,
    descripcion : String,
    precio : Number
});

const Alumno = mongoose.model('Alumno', alumnoSchema);
const Curso = mongoose.model('Curso', cursoSchema);

module.exports = { Alumno, Curso };
