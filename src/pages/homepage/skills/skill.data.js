import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/js.png";
import react from "../../../assets/react.png";
import python from "../../../assets/python.png";

import adobe from "../../../assets/adobe.png";

const SKILL_DATA = [
  {
    name: "HTML",
    description:
      "Od HTML i\xA0CSS zacząłem (chyba z\xA0resztą jak każdy) swoją przygodę z\xA0Frond-Endem. Pierwszą styczność z\xA0nimi miałem w\xA0liceum, a\xA0poważniej zainteresowałem się tym tematem mniej więcej 1.5\xA0roku temu. ",
    imageUrl: html,
    imageClass: "fab fa-html5",
    color: "#E44D26",
  },
  {
    name: "CSS (SASS)",
    description:
      "Naukę zacząłem od kursów internetowych i\xA0własnych projektów. Narzędzie to cały czas zaskakuje mnie tym jak wiele niesamowitych rzeczy można za jego pomocą stworzyć.",
    imageUrl: css,
    imageClass: "fab fa-css3-alt",
    color: "#3C99DC",
  },
  {
    name: "Javascript",
    description:
      "Javascriptu zacząłem uczyć się rok temu, naukę tego języka znacząco ułatwiła mi całkiem dobra znajomość Javy. Przerobiłem różne kursy internetowe, jednak najwięcej wiedzy przyswoiłem tworząc własne aplikacje.",
    imageUrl: javascript,
    imageClass: "fab fa-js",
    color: "#F0DB4F",
  },
  {
    name: "React",
    description:
      "Reacta uczę się już prawie rok i uważam, że poznałem go dość dobrze. Naukę zacząłem od kursów internetowych, a obecnie tworzę za jego pomocą strony internetowe.",
    imageUrl: react,
    imageClass: "fab fa-react",
    color: "#61DBFB",
  },
  {
    name: "Python (Django)",
    description:
      "Kilka tygodni temu uznałem, że najwyższy czas zainteresować się trochę backend'em i postanowiłem zacząć uczyć się Pythona, a mianowicie jego webowego frameworka Django.",
    imageUrl: python,
    imageClass: "fab fa-vuejs",
    color: "#CD6799",
  },
  //new skills
  {
    name: "Programy Adobe",
    description:
      "W podstawowym stopniu opanowałem Adobe Illustrator i Adobe XD, zaczynam się także uczyć obsługi Photoshopa. ",
    imageUrl: adobe,
    imageClass: "fab fa-adobe",
    color: "#fff",
  },
  // redux: {
  //   name: "redux",
  //   description: "",
  //   imageUrl: redux,
  //   color: "black",
  //   class: "new"
  // }
];

export default SKILL_DATA;
