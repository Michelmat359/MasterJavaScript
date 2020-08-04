'use strict'


// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/users
// https://reqres.in/

var div_usuarios = document.querySelector('#usuarios');
var div_janet = document.querySelector('#Janet');


getusuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
        return getJannet();
    })
    .then(data => data.json())
    .then(users => {
        mostrarJanet(users.data);
        return getInfo();
    })
    .then(data => { console.log(data) })

function listadoUsuarios(usuarios) {
    usuarios.map((user, indice) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = indice + ". " + user.first_name + " " + user.last_name;
        div_usuarios.appendChild(nombre);
        document.querySelector(".loading").style.display = "none";
    }).catch(error => {
        alert("ERROR");
    });

}

function mostrarJanet(usuario) {
    console.log(usuario)
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');
    avatar.src = usuario.avatar;
    avatar.width = '100';
    nombre.innerHTML = usuario.first_name + " " + usuario.last_name;
    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);


    document.querySelector("#Janet .loading").style.display = "none";

}

function getInfo() {

    var profesor = {
        nombre: "Miguel Angel",
        apellidos: "Mateo Casali",
        url: "localhost"
    };
    return new Promise((resolve, reject) => {
        var profesor_string = "";

        setTimeout(function () {
            profesor_string = JSON.stringify(profesor);

            if (typeof profesor_string != 'string' || profesor_string == '') return reject('error 1');

            return resolve(profesor_string);

        }, 3000);

    });

}

function getusuarios() {
    return fetch('https://reqres.in/api/users');
}

function getJannet() {
    return fetch('https://reqres.in/api/users/2');
}

