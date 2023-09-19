//hay dos maneras de exportar componentesW
// export default, export comun
//tarea
// armen un array de objetos de personas dentro de un componente persona
// con name, lastname, img, iterarlos
// y mostrarlos por pantalla
import "./header.css";

export const Header = () => {
  return (
    <>
      <div className="hola">
        <h1>titulo de la pagina</h1>
        <nav>
          <a href=""></a>
          <a href=""></a>
        </nav>
      </div>
    </>
  );
};

/*
const peliculas = [
  {
    titulo: "shrek 1",
    año: 2001,
    imagen:
      "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2001/5/w1280/zUKYjBNBr2JecOC71tHZ9C83ojb.jpg",
  },

  {
    titulo: "shrek 2",
    año: 2004,
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/0/0a/Shrek2.jpg/revision/latest?cb=20210415201134&path-prefix=es",
  },
  {
    titulo: "shrek 3",
    año: 2007,
    imagen:
      "https://es.web.img3.acsta.net/medias/nmedia/18/68/23/20/20054548.jpg",
  },

  {
    titulo: "shrek 4",
    año: 2010,
    imagen:
      "https://static.wikia.nocookie.net/doblaje/images/4/44/SHK4Cartel1.png/revision/latest?cb=20160430044256&path-prefix=es",
  },
];

function Home() {
  const lista = document.getElementById("peliculas");
  for (let i = 0; i < peliculas.length; i++) {
    const elemento = document.createElement("li");
    const titulo = document.createElement("h3");
    const texto = document.createElement("p");
    const imagen = document.createElement("img");

    titulo.textContent = peliculas[i].titulo;
    imagen.src = peliculas[i].imagen;
    texto.textContent = peliculas[i].año;

    elemento.appendChild(titulo);
    elemento.appendChild(texto);
    elemento.appendChild(imagen);

    lista.appendChild(elemento);
  }
}
*/
