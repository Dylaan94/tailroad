// tech stack logos
import nextjs from "../../../../images/techStackLogos/nextjs.png";
import react from "../../../../images/techStackLogos/react.png";
import phrase from "../../../../images/techStackLogos/phrase.png";
import bcrypt from "../../../../images/techStackLogos/bcrypt.jpg";
import gatsby from "../../../../images/techStackLogos/gatsby.png";
import figma from "../../../../images/techStackLogos/figma.png";
import wordpress from "../../../../images/techStackLogos/wordpress.png";
import php from "../../../../images/techStackLogos/php.png";
import laravel from "../../../../images/techStackLogos/laravel.png";
import wpml from "../../../../images/techStackLogos/wpml.png";

// images
import crestEnvironmental from "../../../../images/recentWork/crestEnvironmental.png";
import manabu from "../../../../images/recentWork/manabu.png";
import honyakuMemories from "../../../../images/recentWork/honyakuMemories.png";
import hachinohe from "../../../../images/recentWork/hachinohe.png";

export const featuredProject = {
  image: honyakuMemories,
  name: "Honyaku Cloud - Honyaku Memories",
  description_1:
    "Custom interface for Honyaku Cloud's Honyaku Memories service enabling users to to effortlessly view, review and flag translations within the translation memory.",
  description_2:
    "Includes custom sign-in functionality with authentication and encryption to ensure top-tier security.",
  techStack: [nextjs, react, phrase, bcrypt, figma],
};

export const projects = [
  {
    image: hachinohe,
    name: "Visit Hachinohe",
    description:
      "Landing page for Visit Hachinohe Nanbu Senbei Event. Built in English, Japanese, and Chinese",
    techStack: [laravel, php, wordpress, wpml],
  },
  {
    image: manabu,
    name: "Manabu",
    description:
      "Product site for Manabu, a Fukuoka based startup focused on ESG, Learning, and Sustainability.",
    techStack: [gatsby, react],
  },
];
