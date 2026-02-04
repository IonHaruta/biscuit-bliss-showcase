import nobilImg from "@/assets/biscuit-nobil.jpg";
import vanilaImg from "@/assets/biscuit-vanila.jpg";
import fitnessImg from "@/assets/biscuit-fitness.jpg";
import autoImg from "@/assets/biscuit-auto.jpg";
import molokoImg from "@/assets/biscuit-moloko.jpg";
import alisaImg from "@/assets/biscuit-alisa.jpg";
import lamiieImg from "@/assets/biscuit-lamiie.jpg";
import picasoImg from "@/assets/biscuit-picaso.jpg";
import sportImg from "@/assets/biscuit-sport.jpg";

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
];
