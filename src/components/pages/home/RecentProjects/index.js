import * as React from "react";
import { useEffect } from "react";

// logos
import LogoLarge from "../../../../images/logoLarge.png";

// Projects data
import { featuredProject, projects } from "./projectData";
import animations from "./animations";

export default function RecentProjects() {
  useEffect(animations, []);

  return (
    <>
      <section className="recentProjects relative flex w-full justify-center opacity-0">
        <div className="recentProjects-container z-20 flex w-11/12 max-w-screen-xl flex-col py-24">
          {/* Header */}
          <h2 className="recentProjects-header text-4xl text-white">
            Some recent projects
          </h2>

          {/* Showcase Project */}
          <div className="showcase-project flex flex-col py-12 xl:flex-row">
            <img
              className="showcase-project-image w-full rounded-lg border-4 border-primary-green xl:w-2/3"
              src={featuredProject.image}
              alt={featuredProject.name}
            />
            <div className="showcase-project-overlay flex flex-col justify-center   py-6 xl:pl-8">
              <h3 className="showcase-project-name pb-2 text-2xl text-primary-green">
                {featuredProject.name}
              </h3>
              <p className="showcase-project-description text-md text-secondary-grey">
                {featuredProject.description_1}
              </p>
              <p className="showcase-project-description text-md text-secondary-grey">
                {featuredProject.description_2}
              </p>
              <h3 className="showcase-project-techstack pb-2 pt-6 text-lg text-primary-green">
                Tech stack
              </h3>
              <div className="showcase-project-tech-stack flex flex-wrap">
                {featuredProject.techStack.map((logo) => {
                  return (
                    <img
                      className="showcase-project-techstack-icon m-2 h-16"
                      src={logo}
                      alt="tech stack logo"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Projects div */}

          <div className="projects grid grid-cols-1 gap-16 py-12 lg:grid-cols-2">
            {/* Project */}
            {projects.map((project) => {
              return (
                <div className="project flex flex-col">
                  <img
                    className=" h-full w-full rounded-lg border-4 border-primary-green object-cover object-center "
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
                    <h3 className="pb-2 pt-6 text-lg text-primary-green">
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
          className="absolute bottom-0 right-0 h-1/5  opacity-20  lg:h-1/2 "
        />
      </section>
    </>
  );
}
