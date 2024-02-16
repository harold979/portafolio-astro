import GifsApp from "../assets/images/GifsApp.webp";
import InfoPaises from "../assets/images/InfoPaises.webp";
import MapsMapbox from "../assets/images/MapsMapbox.webp";

const data = [
  {
    name: "InfoPaises",
    type: "WebApp",
    url: "https://info-paises.netlify.app/",
    github: "https://github.com/harold979/consultar-paises-Angular",
    image: InfoPaises,
    slug: "InfoPaises",
    description:
      "Este es un sitio web hecho usando Angular, y Tailwind css para buscar información un pais, con filtros de búsqueda de capital  y nombre.",
    tech: ["HTML", "Javascript", "Tailwind css", "Angular"],
  },
  {
    name: "GifsApp",
    type: "WebApp",
    url: "https://gifsapph.netlify.app/",
    github: "https://github.com/harold979/Gifs-App-Angular",
    image: GifsApp,
    slug: "GifsApp",
    description:
      "Este es un sitio web hecho usando Angular, y Tailwind css para buscar imagenes en formato gif. ",
    tech: ["HTML", "Javascript", "Css", "Tailwind css", "Angular"],
  },
  {
    name: "MapsMapbox",
    type: "WebApp",
    url: "https://angular-mapbox-mapss.netlify.app/",
    github: "https://github.com/harold979/angular-maps-mapbox",
    image: MapsMapbox,
    slug: "MapsMapbox",
    description:
      "Este es un sitio web hecho usando Angular, y Tailwind css usando Mapbox  para hacer unas funcionalidades de mapeo y geolocalización como de Google-Maps.",
    tech: ["HTML", "Javascript", "Css", "Tailwind css", "Angular"],
  },
];

export function getData() {
  return data;
}
