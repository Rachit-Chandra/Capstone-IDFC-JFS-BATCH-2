// all images imported from images directory
import product_01_image_01 from "../images/product_01.png";
import product_01_image_02 from "../images/product_02.png";
import product_01_image_03 from "../images/product_03.png";

import product_01_image_04 from "../images/product_04.png";
import product_01_image_05 from "../images/product_05.png";
import product_01_image_06 from "../images/product_06.png";
import product_01_image_07 from "../images/product_07.jpg";

const products = [
  {
    id: "01",
    title: "Bio Derma",
    price: 345.0,
    image01: product_01_image_01,
    image02: product_01_image_01,
    image03: product_01_image_01,
    category: "Skin Care",

    desc: "Bio Derma is an ultra-nourishing daily cream that recreates a healthy skin barrier and helps maintain the skin's water reserves, thus making the skin comfortable again. Unfragranced. Fast absorption.",
  },

  {
    id: "02",
    title: "Chanca Piedra",
    price: 115.0,
    image01: product_01_image_02,
    image02: product_01_image_02,
    image03: product_01_image_02,
    category: "Oil",

    desc: "Oil Based Non-drowsy formula is clinically proven to shorten the duration and reduce the severity of colds, cough, congestion, sore throat, and nasal and bronchial irritations. It speeds up your recovery to get you back to life faster Oil Based.",
  },

  {
    id: "03",
    title: "Umcka Cold Care",
    price: 110.0,
    image01: product_01_image_03,
    image02: product_01_image_03,
    image03: product_01_image_03,
    category: "Chewable Tablets",

    desc: "Non-drowsy formula is clinically proven to shorten the duration and reduce the severity of colds, cough, congestion, sore throat, and nasal and bronchial irritations. It speeds up your recovery to get you back to life faster.",
  },

  {
    id: "04",
    title: "Cetyl Pure",
    price: 120.0,
    image01: product_01_image_04,
    image02: product_01_image_04,
    image03: product_01_image_04,
    category: "Dietary Supplements",

    desc: "As our bodies age, the ability to produce some of the nutrients necessary for joint function and cartilage building declines. CetylPure from “Natrol” helps to nourish and maintain the lubricating fluid in joints and cartilage, which is enough to give you optimal joint health and relief from any joint pain you suffer from, especially after workout sessions.",
  },

  {
    id: "05",
    title: "CLA Core",
    price: 224.0,
    image01: product_01_image_05,
    image02: product_01_image_05,
    image03: product_01_image_05,
    category: "Supplement",

    desc: "CLA might help reduce body fat deposits and improve immune function. The average diet supplies 15-174 mg of CLA daily. People commonly take CLA by mouth for weight loss. It is also often used for bodybuilding and fitness, but there is limited scientific evidence to support these uses.",
  },
  {
    id: "06",
    title: "Poo-Pouri",
    price: 542.0,
    image01: product_01_image_06,
    image02: product_01_image_06,
    image03: product_01_image_06,
    category: "Oil",

    desc: "They are the makers of Poo-Pourri. These are made of essential oils and other natural compounds, which coat the surface of the water and, the manufacturer claims, hold in bad odors. The name of the company is a pun on potpourri.",
  },
  {
    id: "07",
    title: "Paracetamol",
    price: 120.0,
    image01: product_01_image_07,
    image02: product_01_image_07,
    image03: product_01_image_07,
    category: "antipyretic",

    desc: "Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain. Common brand names include Tylenol and Panadol.",
  }

];

export default products;
