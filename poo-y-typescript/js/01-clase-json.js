var bicicleta = {
    color: "rojo", 
    modelo: "BMX", 
    frenos: "Disco", 
    VelocidadMaximo: "60kmh",
    cambiarColor: function(nuevo_color){
        this.color = nuevo_color;
    }
};

console.log(bicicleta);
bicicleta.cambiarColor(azul);