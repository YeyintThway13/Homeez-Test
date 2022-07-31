import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export const socialLinks = [
  {
    id: 1,
    url: "https://facebook.com/",
    icon: <FaFacebook color="white" />,
  },
  {
    id: 2,
    url: "https://twitter.com/",
    icon: <FaTwitter color="white" />,
  },
  {
    id: 3,
    url: "https://facebook.com/",
    icon: <FaInstagram color="white" />,
  },
  {
    id: 4,
    url: "https://facebook.com/",
    icon: <FaYoutube color="white" />,
  },
];

export const navLinks = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/",
  },
  {
    text: "Your Choices",
    link: "/",
    children: [
      {
        id: 1,
        text: "Desgin Your House",
        link: "/",
      },
      {
        id: 2,
        text: "Get Advice From Us",
        link: "/",
      },
      {
        id: 3,
        text: "Test Preparation",
        link: "/",
      },
    ],
  },
  {
    text: "Contact",
    link: "/",
  },
];

export const testinomialData = [
  {
    id: 1,
    name: "Rina Useugi",
    university: "Yangon",
    program: "MA Intercultural Communication",
    photo:
      "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    speech:
      "With Online Escrow, Homeez holds your funds until the works are done and workmanship is approved by you",
  },
  {
    id: 2,
    name: "Ruoying Wang",
    university: "Korea",
    program: "MSc Accounting",
    photo:
      "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    speech:
      "With Online Escrow, Homeez holds your funds until the works are done and workmanship is approved by you",
  },
  {
    id: 3,
    name: "Chap Feng",
    university: "Singapore",
    program: "MSc Management",
    photo:
      "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    speech:
      "With Online Escrow, Homeez holds your funds until the works are done and workmanship is approved by you",
  },
  {
    id: 5,
    name: "Chap Feng",
    university: "Thailand",
    program: "MSc Management",
    photo:
      "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    speech:
      "With Online Escrow, Homeez holds your funds until the works are done and workmanship is approved by you",
  },
  {
    id: 5,
    name: "Chap Feng",
    university: "Japan",
    program: "MSc Management",
    photo:
      "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg",
    speech:
      "With Online Escrow, Homeez holds your funds until the works are done and workmanship is approved by you",
  },
];
