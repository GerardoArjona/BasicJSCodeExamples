// const saludo = (callback) => {
//     console.log("Saludando")
//     callback()
// } 

// const despedida = () => {
//     console.log("Adios")
// }

// saludo(despedida)

// const saludo = (() => {
//     console.log("Adios")
// })

// saludo()

const multiplicador = (factor) =>{
    return x => x * factor
}

let triplicador = multiplicador(3)
let cuadruplicador = multiplicador(4)

console.log(triplicador)