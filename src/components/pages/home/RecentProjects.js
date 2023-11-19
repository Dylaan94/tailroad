import * as React from "react";

// images

import crestEnvironmental from "../../../images/recentWork/crestEnvironmental.png";
import manabu from "../../../images/recentWork/manabu.png";
import honyakuMemories from "../../../images/recentWork/honyakuMemories.png";

// logos
import LogoLarge from "../../../images/logoLarge.png";

// tech stack logos
import nextjs from "../../../images/techStackLogos/nextjs.png";
import react from "../../../images/techStackLogos/react.png";
import phrase from "../../../images/techStackLogos/phrase.png";
import bcrypt from "../../../images/techStackLogos/bcrypt.jpg";
import gatsby from "../../../images/techStackLogos/gatsby.png";
import figma from "../../../images/techStackLogos/figma.png";

// create array out of images
const projects = [
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

const featuredTechStack = [nextjs, react, phrase, bcrypt, figma];

export default function RecentProjects() {
  return (
    <>
      <section className="recentProjects relative flex w-full justify-center">
        <div className="recentProjects-container z-20 flex w-11/12 max-w-screen-xl flex-col py-24">
          {/* Header */}
          <h2 className="text-4xl text-white">Some recent projects</h2>

          {/* Showcase Project */}
          <div className="showcase-project flex py-12">
            <img
              className="w-2/3 rounded-lg border-4 border-primary-green"
              src={honyakuMemories}
              alt="honyaku memories"
            />
            <div className="showcase-project-overlay flex flex-col justify-center bg-primary-grey  py-6 pl-8">
              <h3 className="pb-2 text-2xl text-primary-green">
                Honyaku Cloud - Honyaku Memories
              </h3>
              <p className="text-md text-secondary-grey">
                Custom interface for Honyaku Cloud's Honyaku Memories service
                enabling users to to effortlessly view, review and flag
                translations within the translation memory.
              </p>
              <p className="text-md text-secondary-grey">
                Includes custom sign-in functionality with authentication and
                encryption to ensure top-tier security.
              </p>
              <h3 className="pt-6 pb-2 text-lg text-primary-green">
                Tech stack
              </h3>
              <div className="project-tech-stack flex flex-wrap">
                {featuredTechStack.map((logo) => {
                  return (
                    <img
                      className="m-2 h-16"
                      src={logo}
                      alt="tech stack logo"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Projects div */}

          <div className="projects grid grid-cols-2 gap-16 py-12">
            {/* Project */}
            {projects.map((project) => {
              return (
                <div className="project flex flex-col">
                  <img
                    className="h-full w-full rounded-lg border-4 border-primary-green "
                    src={project.image}
                    alt="project"
                  />
                  <div className="project-overlay flex flex-col justify-center  bg-transparent py-6">
                    <h3 className="text-2xl text-primary-green">
                      {project.name}
                    </h3>
                    <p className="text-lg text-secondary-grey">
                      {project.description}
                    </p>
                    <h3 className="pt-6 pb-2 text-lg text-primary-green">
                      Tech stack
                    </h3>
                    <div className="project-tech-stack flex flex-wrap">
                      {project.techStack.map((logo) => {
                        return (
                          <img
                            className="m-2 h-8 "
                            src={logo}
                            alt="tech stack logo"
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <img
          src={LogoLarge}
          alt="logo"
          className="absolute bottom-0 right-0  h-1/2  opacity-20 "
        />
      </section>
    </>
  );
}
