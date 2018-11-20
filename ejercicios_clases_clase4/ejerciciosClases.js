// 4. Haz una clase llamada Persona que siga las siguientes condiciones:
// Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
// calcularIMC()
// esMayorDeEdad()
// El constructor pide nombre, edad,sexo,peso y altura
// Generar el RFC a partir de el nombre, edad y sexo

class Persona{

    constructor(nombre, fecha, sexo, peso, altura){
        this.nombre = nombre
        this.fecha = fecha
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
    }

    calcularIMC(){
        return this.peso/(this.altura * this.altura)
    }

    isMayor(){
        //1997-07-15
        let year = this.fecha.split("-")
        //['1997','07','15']
        if((2018 - parseInt(year[0])) >= 18){
            return true
        }else{
            return false
        }
    }

    calcularRFC(){
        //Gerardo Arjona Jimenez
        let nombre = this.nombre.split(" ")
        //['Gerardo','Arjona','Jimenez']
        let apellidoPaterno = nombre[1]
        let primeraLetra = apellidoPaterno[0]
        let segundaLetra

        for(let i = 0; i<apellidoPaterno.length; i++){
            if(
                apellidoPaterno[i].toLowerCase() === 'a' || apellidoPaterno[i].toLowerCase() === 'e' || apellidoPaterno[i].toLowerCase() === 'i' || apellidoPaterno[i].toLowerCase() === 'o' || apellidoPaterno[i].toLowerCase() === 'u'){
                    segundaLetra = apellidoPaterno[i].toUpperCase()
                    break
                }
        }

        let apellidoMaterno = nombre[2]
        let terceraLetra = apellidoMaterno[0]
        let cuartaLetra = nombre[0][0]

        let year = this.fecha.split("-")
        let anio = year[0][2] + year[0][3]

        return primeraLetra + segundaLetra + terceraLetra + cuartaLetra + year[1] + year[2]

    }

}

let p1 = new Persona("Gerardo Arjona Jimenez","1997-07-15","M", 60, 173,)

console.log(p1.calcularIMC())
console.log(p1.isMayor())
console.log(p1.calcularRFC())

// 5. Crear un objeto Cuenta que tenga los siguientes atributos y metodos:
// Titular y cantidad
// ingresar(cantidad)
// retirar(cantidad)
// Hacer las validaciones previas
// Como regla de negocio no debe de tener más de $900 y menos de $10

// retir(retiro){
//     if  
//         this.cantidad = this.cantidad - retiro
// }