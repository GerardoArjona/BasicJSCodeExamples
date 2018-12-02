const mongoose = require('mongoose')
const URL = 'mongodb://gerardo:1q2w3e4r5t6y@ds037087.mlab.com:37087/devf_batch25_cintaroja'

mongoose.connect(URL, {useNewUrlParser:true}, ()=>{
    console.log("Conexion exitosa a la BD, carnal")
})

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId; //Autoincrementable de Mongo AKA el ID

const peliSchema = new Schema({
    pelicula : ObjectId,
    titulo : String,
    year : Number,
    descripcion : { 
        type : String
    },
    portadas : [String],
    genero : {
        type : String,
        enum : ['comedia', 'drama', 'terror'],
        require : 'El genero tiene que venir'
    },
    director : {
        type : String,
        default : 'Gerardo Arjona' 
    }
})

const Pelicula = mongoose.model('Pelicula', peliSchema);

module.exports  = { Pelicula }