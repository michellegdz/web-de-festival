// 1. BASE DE DATOS DE LAS PELÍCULAS (Las claves coinciden con ?id=...)
const peliculas = {
  "nuestra-tierra": {
    titulo: "Nuestra tierra",
    director: "Lucrecia Martel",
    datos: "ARGENTINA · 2026 · 112'",
    genero: "DRAMA",
    fecha: "10 Diciembre · 18:30",
    lugar: "Cine Doré",
    imagen: "img/nuestra tierra.jpeg",
    trailer: "https://youtu.be/jmeBnEns89A?si=EIlYgforzyASlU-D",
  },
  "the-presidents-cake": {
    titulo: "The president's cake",
    director: "Hasan Hadi",
    datos: "IRAQ · 2025 · 95'",
    genero: "DRAMA",
    fecha: "11 Diciembre · 21:00",
    lugar: "Cine Doré",
    imagen: "img/the presidents cake.jpg",
    trailer: "https://www.youtube.com/watch?v=ejemplo2",
  },
  ariel: {
    titulo: "Ariel",
    director: "Lois Patiño",
    datos: "ESPAÑA · 2025 · 88'",
    genero: "EXPERIMENTAL",
    fecha: "12 Diciembre · 19:00",
    lugar: "Cine Doré",
    imagen: "img/ariel.jpg",
    trailer: "https://www.youtube.com/watch?v=ejemplo3",
  },
  "anoche-conquiste-tebas": {
    titulo: "Anoche conquisté Tebas",
    director: "Gabriel Azorín",
    datos: "ESPAÑA · 2025 · 97'",
    genero: "DRAMA",
    fecha: "8 Diciembre · 20:30",
    lugar: "Cine Doré",
    imagen: "img/anoche conquisté tebas.jpg",
    trailer: "https://www.youtube.com/watch?v=ejemplo4",
  },
  "silent-friend": {
    titulo: "Silent Friend",
    director: "Ildikó Enyedi",
    datos: "HUNGRÍA · 2025 · 112'",
    genero: "FANTASÍA",
    fecha: "7 Diciembre · 18:00",
    lugar: "Cine Doré",
    imagen: "img/silent friend.jpg",
    trailer: "https://www.youtube.com/watch?v=ejemplo5",
  },
  "blue-moon": {
    titulo: "Blue Moon",
    director: "Richard Linklater",
    datos: "EE. UU. · 2026 · 104'",
    genero: "DRAMA",
    fecha: "9 Diciembre · 20:00",
    lugar: "Cine Doré",
    imagen: "img/blue moon.jpg",
    trailer: "https://youtu.be/HQXXwZdZtHk?si=BcrIpERX8EyLlZjF",
  },
  aftersun: {
    titulo: "Aftersun",
    director: "Charlotte Wells",
    datos: "REINO UNIDO · 2023 · 102'",
    genero: "DRAMA",
    fecha: "6 Diciembre · 19:00",
    lugar: "Cine Doré",
    imagen: "img/aftersun.jpg",
    trailer: "https://www.youtube.com/watch?v=ejemplo7",
  },
  "drive-my-car": {
    titulo: "Drive My Car",
    director: "Ryūsuke Hamaguchi",
    datos: "JAPÓN · 2021 · 179'",
    genero: "DRAMA",
    fecha: "7 Diciembre · 16:00",
    lugar: "Cine Doré",
    imagen: "img/drive my car.jpg",
    trailer: "https://www.youtube.com/watch?v=ejemplo8",
  },
  "anatomia-de-una-caida": {
    titulo: "Anatomía de una caída",
    director: "Justine Triet",
    datos: "FRANCIA · 2023 · 151'",
    genero: "DRAMA / THRILLER JUDICIAL",
    fecha: "8 Diciembre · 17:30",
    lugar: "Cine Doré",
    imagen: "img/anatomia-de-una-caida.jpg",
    trailer: "https://www.youtube.com/watch?v=ejemplo9",
  },
  "past-lives": {
    titulo: "Past Lives",
    director: "Celine Song",
    datos: "COREA DEL SUR · 2023 · 106'",
    genero: "DRAMA ROMÁNTICO",
    fecha: "9 Diciembre · 18:00",
    lugar: "Cine Doré",
    imagen: "img/past lives.jpg",
    trailer: "https://www.youtube.com/watch?v=ejemplo10",
  },
  creatura: {
    titulo: "Creatura",
    director: "Elena Martín Gimeno",
    datos: "ESPAÑA · 2023 · 112'",
    genero: "DRAMA",
    fecha: "10 Diciembre · 20:30",
    lugar: "Cine Doré",
    imagen: "img/creatura.jpg",
    trailer: "https://www.youtube.com/watch?v=ejemplo11",
  },
  "24-siete": {
    titulo: "24 Siete",
    director: "Santiago Ráfales",
    datos: "ESPAÑA · 2023 · 28'",
    genero: "DRAMA ADOLESCENTE",
    fecha: "11 Diciembre · 17:00",
    lugar: "Cine Doré",
    imagen: "img/247.jpg",
    trailer: "https://www.youtube.com/watch?v=ejemplo12",
  },
  "aunque-es-de-noche": {
    titulo: "Aunque es de noche",
    director: "Guillermo García López",
    datos: "ESPAÑA · 2023 · 16'",
    genero: "DRAMA SOCIAL",
    fecha: "11 Diciembre · 17:45",
    lugar: "Cine Doré",
    imagen: "img/aunque es de noche.jpeg",
    trailer: "https://www.youtube.com/watch?v=ejemplo13",
  },
  "la-quimera": {
    titulo: "La quimera",
    director: "Alice Rohrwacher",
    datos: "ITALIA · 2023 · 130'",
    genero: "DRAMA",
    fecha: "12 Diciembre · 21:00",
    lugar: "Cine Doré",
    imagen: "img/la quimera.jpeg",
    trailer: "https://www.youtube.com/watch?v=ejemplo14",
  },
  midsommar: {
    titulo: "Midsommar",
    director: "Ari Aster",
    datos: "ESTADOS UNIDOS · 2019 · 147'",
    genero: "TERROR FOLCLÓRICO / DRAMA",
    fecha: "12 Diciembre · 23:00",
    lugar: "Cine Doré",
    imagen: "img/midsommar.jpeg",
    trailer: "https://www.youtube.com/watch?v=ejemplo15",
  },
  titane: {
    titulo: "Titane",
    director: "Julia Ducournau",
    datos: "FRANCIA · 2021 · 108'",
    genero: "THRILLER",
    fecha: "12 Diciembre · 23:30",
    lugar: "Cine Doré",
    imagen: "img/titane.jpg",
    trailer: "https://www.youtube.com/watch?v=ejemplo16",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // A. Cargar datos dinámicos de la película seleccionada
  const parametros = new URLSearchParams(window.location.search);
  const peliSeleccionada = parametros.get("id");

  if (peliSeleccionada && peliculas[peliSeleccionada]) {
    const peli = peliculas[peliSeleccionada];

    if (document.getElementById("peli-img")) {
      document.getElementById("peli-img").src = peli.imagen;
      document.getElementById("peli-img").alt = peli.titulo;
    }
    if (document.getElementById("peli-titulo"))
      document.getElementById("peli-titulo").textContent = peli.titulo;
    if (document.getElementById("peli-director"))
      document.getElementById("peli-director").textContent = peli.director;
    if (document.getElementById("peli-datos"))
      document.getElementById("peli-datos").textContent = peli.datos;
    if (document.getElementById("peli-genero"))
      document.getElementById("peli-genero").textContent = peli.genero;
    if (document.getElementById("peli-fecha"))
      document.getElementById("peli-fecha").textContent = peli.fecha;
    if (document.getElementById("peli-lugar"))
      document.getElementById("peli-lugar").textContent = peli.lugar;
    if (document.getElementById("peli-trailer"))
      document.getElementById("peli-trailer").href = peli.trailer;
  }

  // B. Cálculo de precio del formulario
  const precios = {
    general: 8.0,
    reducida: 6.0,
  };

  const selectTipo = document.getElementById("tipo");
  const selectCantidad = document.getElementById("cantidad");
  const elementoTotal = document.getElementById("precio-total");

  function calcularTotal() {
    const tipoSeleccionado = selectTipo.value;
    const cantidadSeleccionada = parseInt(selectCantidad.value, 10);

    if (tipoSeleccionado && !isNaN(cantidadSeleccionada)) {
      const precioUnitario = precios[tipoSeleccionado] || 0;
      const total = precioUnitario * cantidadSeleccionada;

      elementoTotal.textContent = total.toFixed(2).replace(".", ",") + " €";
    } else {
      elementoTotal.textContent = "0,00 €";
    }
  }

  if (selectTipo && selectCantidad && elementoTotal) {
    selectTipo.addEventListener("change", calcularTotal);
    selectCantidad.addEventListener("change", calcularTotal);
  }
});
