class Carro{

    constructor(marca, color, motor, modelo){
        this.marca = marca;
        this.color = color;
        this.motor = motor;
        this.modelo = modelo;
    }

    arrancar(){
        return "estoy arrancando"
    }

    cargarGasolina(){
        return "cargando gasolina"
    }
    //Metodos GET
    getMarca(){
        return this.marca
    }

    //metodos SET
    setMarca(marca){
        if(marca !== "Faw"){
            this.marca = marca
        }
        return 1
    }


}

const versa = new Carro('Nissan','Rojo','v3','2017')
//console.log(versa.marca)
console.log(versa.getMarca())
console.log(versa.setMarca('Faw'))
console.log(versa.getMarca())
console.log(versa.arrancar())
console.log(typeof(versa))

const bocho = new Carro('Wolskwagen','Amarillo','v4','1973')
bocho.setMarca('Faw');
bocho.getMarca();