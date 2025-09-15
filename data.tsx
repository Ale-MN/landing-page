import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Crop,
  Pencil,
  Computer,
  Github,
  Target,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://linkedin.com/in/victor-alejandro-mannino-902453277",
  },
  {
    id: 2,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/Ale-MN?tab=repositories",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Frontend Developer",
    subtitle: "",
    description:
      "Dejé mi trabajo de ese momento para poder dedicarme al 100% al estudio de Frontend Developer",
    date: "Ago 2025 ",
  },
  {
    id: 2,
    title: "Completé cursado",
    subtitle: "Universidad Tecnológica Nacional Facultad Regional Tucumán.",
    description:
      "Completé las materias correspondientes para Analista en Sistemas",
    date: "Nov 2024",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 1,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Lista de tareas",
    image: "/image-1.jpg",
    urlGithub: "#!",
    urlDemo: "https://listade-tareas-app.netlify.app/",
  },
  {
    id: 2,
    title: "Buscador Peliculas",
    image: "/image-2.jpg",
    urlGithub: "#!",
    urlDemo: "https://buscadorpeliculas-react.netlify.app/",
  },
  {
    id: 3,
    title: "E-Commerce",
    image: "/image-3.jpg",
    urlGithub: "https://github.com/Ale-MN/e-commerceTWCSS",
    urlDemo: "https://ecommercetwcss.netlify.app/",
  },
  
];
