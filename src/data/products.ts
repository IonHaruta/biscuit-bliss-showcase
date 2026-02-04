import nobilImg from "@/assets/biscuit-nobil.jpg";
import vanilaImg from "@/assets/biscuit-vanila.jpg";
import fitnessImg from "@/assets/biscuit-fitness.jpg";
import autoImg from "@/assets/biscuit-auto.jpg";
import molokoImg from "@/assets/biscuit-moloko.jpg";
import alisaImg from "@/assets/biscuit-alisa.jpg";
import lamiieImg from "@/assets/biscuit-lamiie.jpg";
import picasoImg from "@/assets/biscuit-picaso.jpg";
import sportImg from "@/assets/biscuit-sport.jpg";
import plaiImg from "@/assets/biscuit-plai.jpg";
import iphoneImg from "@/assets/biscuit-iphone.jpg";
import olimpImg from "@/assets/biscuit-olimp.jpg";
import adoratiImg from "@/assets/biscuit-adorati.jpg";
import zooImg from "@/assets/biscuit-zoo.jpg";
import primaImg from "@/assets/biscuit-prima.jpg";
import cleopatraImg from "@/assets/biscuit-cleopatra.jpg";
import minitopImg from "@/assets/biscuit-minitop.jpg";
import madlenImg from "@/assets/biscuit-madlen.jpg";
import petitbeurreImg from "@/assets/biscuit-petitbeurre.jpg";
import tropicalImg from "@/assets/biscuit-tropical.jpg";
import visImg from "@/assets/biscuit-vis.jpg";
import tictacImg from "@/assets/biscuit-tictac.jpg";
import poianaImg from "@/assets/biscuit-poiana.jpg";
import melancolieImg from "@/assets/biscuit-melancolie.jpg";
import crinaImg from "@/assets/biscuit-crina.jpg";
import basmImg from "@/assets/biscuit-basm.jpg";
import ceasImg from "@/assets/biscuit-ceas.jpg";
import lacafeaImg from "@/assets/biscuit-lacafea.jpg";

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "nobil",
    name: "Nobil",
    image: nobilImg,
    description:
      "Biscuiți eleganți cu un model floral delicat, perfecti pentru orice ocazie specială.",
  },
  {
    id: "topleonoe-moloko",
    name: "Topleonoe Moloko",
    image: molokoImg,
    description:
      "Biscuiți sandwich cu cremă de lapte, o combinație perfectă de textură și gust.",
  },
  {
    id: "alisa",
    name: "Alisa",
    image: alisaImg,
    description:
      "Biscuiți clasici cu unt, cu un design elegant și gust rafinat.",
  },
  {
    id: "fitness",
    name: "Fitness",
    image: fitnessImg,
    description:
      "Biscuiți sănătoși cu cereale și ovăz, ideali pentru un stil de viață activ.",
  },
  {
    id: "class-vanila",
    name: "Class Vanilă",
    image: vanilaImg,
    description:
      "Biscuiți clasici cu aromă naturală de vanilie, un favorit pentru toate vârstele.",
  },
  {
    id: "class-lamiie",
    name: "Class Lămîie",
    image: lamiieImg,
    description:
      "Biscuiți răcoritori cu gust proaspăt de lămâie, perfecti pentru vară.",
  },
  {
    id: "auto",
    name: "Auto",
    image: autoImg,
    description:
      "Biscuiți în formă de mașinuță, adorați de copii și nu numai!",
  },
  {
    id: "picaso",
    name: "Picaso",
    image: picasoImg,
    description:
      "Biscuiți artistici cu design unic, adevărate opere de artă culinară.",
  },
  {
    id: "sport",
    name: "Sport",
    image: sportImg,
    description:
      "Biscuiți energizanți pentru sportivi și oameni activi.",
  },
  {
    id: "plai",
    name: "Plai",
    image: plaiImg,
    description:
      "Biscuiți cu motive tradiționale moldovenești, gust autentic de acasă.",
  },
  {
    id: "iphone",
    name: "Iphone",
    image: iphoneImg,
    description:
      "Biscuiți moderni în formă de telefon, pentru generația digitală.",
  },
  {
    id: "olimp",
    name: "Olimp",
    image: olimpImg,
    description:
      "Biscuiți inspirați de spiritul olimpic, cu design de medalie de aur.",
  },
  {
    id: "adorati",
    name: "Adorați",
    image: adoratiImg,
    description:
      "Biscuiți în formă de inimă, perfecti pentru a arăta dragostea.",
  },
  {
    id: "zoo",
    name: "Zoo",
    image: zooImg,
    description:
      "Colecție de biscuiți cu animale, ideali pentru copii.",
  },
  {
    id: "prima",
    name: "Prima",
    image: primaImg,
    description:
      "Biscuiți de prima clasă cu design regal și gust premium.",
  },
  {
    id: "cleopatra",
    name: "Cleopatra",
    image: cleopatraImg,
    description:
      "Biscuiți exotici inspirați din Egiptul antic, cu design faraonic.",
  },
  {
    id: "mini-top",
    name: "Mini-Top",
    image: minitopImg,
    description:
      "Biscuiți miniaturali perfecti pentru gustări rapide.",
  },
  {
    id: "madlen",
    name: "Madlen",
    image: madlenImg,
    description:
      "Biscuiți în stil francez, inspirați de celebrele madlene.",
  },
  {
    id: "petit-beurre",
    name: "Petit Beurre",
    image: petitbeurreImg,
    description:
      "Clasicii biscuiți cu unt în stil european, crocanti și delicioși.",
  },
  {
    id: "tropical",
    name: "Tropical",
    image: tropicalImg,
    description:
      "Biscuiți cu gust exotic de fructe tropicale.",
  },
  {
    id: "vis",
    name: "Vis",
    image: visImg,
    description:
      "Biscuiți delicați ca un vis, cu design de lună și stele.",
  },
  {
    id: "tic-tac",
    name: "Tic-Tac",
    image: tictacImg,
    description:
      "Biscuiți distractivi în formă de X, pentru jocuri și petreceri.",
  },
  {
    id: "poiana",
    name: "Poiana",
    image: poianaImg,
    description:
      "Biscuiți cu motive naturale de pădure și flori.",
  },
  {
    id: "melancolie",
    name: "Melancolie",
    image: melancolieImg,
    description:
      "Biscuiți poetici cu design artistic delicat.",
  },
  {
    id: "crina",
    name: "Crina",
    image: crinaImg,
    description:
      "Biscuiți eleganți cu model de floare de crin.",
  },
  {
    id: "basm",
    name: "Basm",
    image: basmImg,
    description:
      "Biscuiți magici cu design de castel din povești.",
  },
  {
    id: "ceas",
    name: "Ceas",
    image: ceasImg,
    description:
      "Biscuiți în formă de ceas, pentru fiecare moment al zilei.",
  },
  {
    id: "la-cafea",
    name: "La Cafea",
    image: lacafeaImg,
    description:
      "Biscuiți cu aromă de cafea, perfecti pentru o pauză relaxantă.",
  },
];
