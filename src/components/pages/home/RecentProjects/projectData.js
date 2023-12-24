// tech stack logos
import nextjs from "../../../../images/techStackLogos/nextjs.png";
import react from "../../../../images/techStackLogos/react.png";
import phrase from "../../../../images/techStackLogos/phrase.png";
import bcrypt from "../../../../images/techStackLogos/bcrypt.jpg";
import gatsby from "../../../../images/techStackLogos/gatsby.png";
import figma from "../../../../images/techStackLogos/figma.png";

// images
import crestEnvironmental from "../../../../images/recentWork/crestEnvironmental.png";
import manabu from "../../../../images/recentWork/manabu.png";
import honyakuMemories from "../../../../images/recentWork/honyakuMemories.png";

export const featuredProject = {
  image: honyakuMemories,
  name: "Honaku Cloud - Honyaku Memories",
  description_1:
    "Custom interface for Honyaku Cloud's Honyaku Memories service enabling users to to effortlessly view, review and flag translations within the translation memory.",
  description_2:
    "Includes custom sign-in functionality with authentication and encryption to ensure top-tier security.",
  techStack: [nextjs, react, phrase, bcrypt, figma],
};

export const projects = [
  {
    image: manabu,
    name: "Manabu",
    description:
      "Product site for Manabu, a Fukuoka based startup focused on ESG, Learning, and Sustainability.",
    techStack: [gatsby, react],
  },
  {
    image: crestEnvironmental,
    name: "Crest Environmental",
    description:
      "Holding page and ebrochure for Crest Environmental, UK based ecological migration specialists. Full site build in progress. ",
    techStack: [gatsby, react, figma],
  },
];
