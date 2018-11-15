const Carro = {
    // Nombre atributo : Valor atributo
    color : 'Rojo',
    motor : 'V8',
    marca : 'BMW',
    modelo : '2017',
    //Metodo
    arrancar : () => {
        return "Estoy arrancando";
    },
    tocar_claxon : () => {
        return "Beep beep";
    }
}

console.log(Carro.color)
console.log(Carro.arrancar())
console.log(Carro.tocar_claxon() + " " + Carro.arrancar());

// let arrancar = () => {}