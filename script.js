const fotos = [
    "img/foto1.jpeg",
    "img/foto2.jpeg",
    "img/foto3.jpeg",
    "img/foto4.jpeg",
    "img/foto5.jpeg",
    "img/foto6.jpeg",
    "img/foto7.jpeg",
    "img/foto8.jpeg"
];
let indice = 0;

function mostrarFoto() {
  document.getElementById("foto").src = fotos[indice];
}

function siguiente() {
  indice = (indice + 1) % fotos.length;
  mostrarFoto();
}

function anterior() {
  indice = (indice - 1 + fotos.length) % fotos.length;
  mostrarFoto();
}
