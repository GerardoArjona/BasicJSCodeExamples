const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send({message: 'Peticion a root'})
});

//Endpoints con PATH params
app.get('/users/:id/:nombre',(req,res)=>{
    console.log(req.params.id)
    const id = req.params.id
    const nombre = req.params.nombre
    const user1 = {
        id:1,
        name:'Juan',
        last_name:'Perez',
        age: 45,
        is_alive: true
    }
    const user2 = {
        id:109,
        name:'Felipe',
        last_name:'Perez',
        age: 45,
        is_alive: true
    }
    if(id == 1 && nombre == 'Juan'){
        res.status(200).send(user1)
    }else if(id == 109 && nombre == 'Juan') {
        res.status(200).send(user2)
    }else{
        res.status(404).send({message:'Usuario no encontrado'})
    }
});

//Endpoints con QUERY parameters
app.get('/search',(req,res)=>{
    const {q} = req.query
    // const search = req.query.search
    // const color = req.query.color
    console.log(req.params)
    console.log(req.query)
    res.send({
        message:`El busqueda es ${q}`
    })
})

app.post('/user/create',(req,res)=>{
    console.log(req.body)
    const {name, last_name} = req.body
    const newUser = {
        id:1,
        name,
        last_name
    }
    res.status(201).send({
        newUser,
        message: 'Usuario creado exitosamente'
    })
});

//SIEMPRE VA AL FINAL DEL ARCHIVO
app.listen(3000,()=>{
    console.log('Server on port 3000')
})