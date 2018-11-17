// /* let persona = [
//     "mauricio",
//     "saavedra"
// ]; */
// /* 
// let persona = {
//      nombre:   "Mauricio",
//      apellido: "Saavedra",
//      nacionalidad: "MX"
// } */
// class Persona {
//     constructor(nombre, apellido, nacionalidad){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.nacionalidad = nacionalidad;
//     }
//     presentarse(){
//         //return "Hola, mi nombre es " + this.nombre + " " + this.apellido;
//         return `Hola, mi nombre es ${this.nombre} ${this.apellido}`
//     }
// }
// /* const persona_1 = new Persona("Mauricio", "Saavedra");
// let valor = persona_1.presentarse();
// console.log( valor );
//  */
// class Animal {
//     constructor(piernas, cerebro){
//         this.piernas = piernas;
//         this.cerebro = cerebro;
//     }
// }

// class Humano extends Animal {
//     constructor(piernas, cerebro, pulgares){
//         super(piernas, cerebro);
//         this. pulgares = pulgares 
//     }

//     hablar(palabras){
//         console.log(palabras)
// //     }
    
// // }

// // class Mascota extends Animal {
// //     constructor(cerebro, pulgas){
// //         super(cerebro);
// //         this.pulgas = pulgas;
// //     }

// //     ladra(){
// //         console.log("Woof woof")
// //     }
// // } 

// // const gerardo = new Humano(2, 1)
// // const fido = new Mascota(1,1000)
// // console.log(gerardo.hablar("Estoy hablando"))

// //EJERCICIOS

// // Crear un objeto de tipo triangulo con atributos base y 
// // altura y tener el metodo  area y perimetro.

// const trianguloEquilatero = {
//     base : 3,
//     altura : 5,
//     perimetro : () => {
//         let peri = trianguloEquilatero.base * 3
//         return peri
//     },
//     area : () => {
//         let a = (trianguloEquilatero.base * trianguloEquilatero.altura)/2
//         return a
//     }
// }

// console.log(trianguloEquilatero.perimetro())
// console.log(trianguloEquilatero.area())

// class Triangulo {
//     constructor(base, altura){
//         this.base = base
//         this.altura = altura
//     }

//     area(){
//         let a = (this.base * this.altura)/2
//         return `El area es: ${a}`
//     }

//     perimetro(){
//         let p = this.base * 3
//         return `Perimetro es ${p}`
//     }
// }

// const t = new Triangulo(5,5)
// let area = t.area()
// let perimetro = t.perimetro()

// const t2 = new Triangulo(2,3)
// let area2 = t2.area()
// let perimetro2 = t2.perimetro()


// console.log(area)
// console.log(perimetro)
// console.log(area2)
// console.log(perimetro2)


//2.Crear un objeto tipo cuadrado y obtener el perimetro y area.
//3.Crear un objeto tipo rectangulo y obtener el perimetro y area.

class Cuadrado {
    constructor(lado){
        this.lado = lado
    }

    area(){
        return this.lado * this.lado
    }

    perimetro(){
        return this.lado * 4
    }
}

const c = new Cuadrado(5)
console.log(c.perimetro())
console.log(c.area())

class Rectangulo{
    constructor(base, altura){
        this.base = base
        this.altura = altura
    }

    area(){
        return this.base * this.altura
    }

    perimetro(){
        return (this.base * 2) + (this.altura * 2)
    }
}

const r = new Rectangulo(3,5)
console.log(r.perimetro())
console.log(r.area())







