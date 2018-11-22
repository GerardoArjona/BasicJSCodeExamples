// var sum = (a,b) => {
//     return a+b
// }

// var sum2 = (a,b) => a+b 

// var saludo = (nombre) => console.log(`Hola: ${nombre}`)

// var saludo2 = nombre => console.log(`Hola: ${nombre}`)

// var saludo3 = () => "Hola como estas"

// //var foo = () => ({nombre:"Gerardo"})

// var foo = (name, age, ...rest) => {
//     return (
//         {
//             nombre:name, 
//             edad: age,
//             otros_parametros: rest
//         }
//     )
// }

// let persona = foo("Gerardo", 21, 1.73, 70, "HOla", true)
// console.log(persona.otros_parametros)

// var parametros_rest = (...resto) => {
//     console.log(resto[0])
// }

// parametros_rest(1)
// parametros_rest(["Hola",9])


//console.log(sum2(2,2))
//saludo2("Gerardo")
//console.log(saludo3())

// persona = foo()
// console.log(persona.nombre)

// 1.-Guardar en un array los 20, iterando,
// primeros números pares y sea regresado

// var pares = () => {
//     let pares = []
//     for(let i=0; i<=20; i++){
//         if(i%2 == 0){
//             pares.push(i)
//         }
//     }
//     return pares
// }

// console.log(pares())

// 2.-Hacer una funcion que calcule el tiempo necesario 
// para que un automóvil que se mueve con una 
// velocidad de 73000 m/h recorra una 
// distancia de 120 km. (TIEMPO = d/v)

// const tiempo = () => {
//     let velocidad = 73000 / 1000
//     let distancia = 120
//     let tiempo = distancia/velocidad
//     return tiempo 
// }

// console.log(tiempo())