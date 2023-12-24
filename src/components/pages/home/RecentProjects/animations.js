export default function animations() {
  const handleScroll = () => {
    const recentProjects = document.querySelector(".recentProjects");
    const { top, bottom } = recentProjects.getBoundingClientRect();
    const elementHeight = bottom - top;
    const inView =
      top + elementHeight / 1.5 >= 0 &&
      bottom - elementHeight / 1.5 <= window.innerHeight;
    console.log(top, bottom, window.innerHeight);
    if (inView) {
      recentProjects.classList.remove("opacity-0");

      // header animation
      const header = document.querySelector(".recentProjects-header");
      header.classList.add("animate__animated", "animate__fadeInDown");

      const showcaseProjectImage = document.querySelector(
        ".showcase-project-image"
      );
      showcaseProjectImage.classList.add(
        "animate__animated",
        "animate__fadeInLeft"
      );
      showcaseProjectImage.style.animationDelay = "0.3s";

      // showcase name animation
      const showcaseProjectName = document.querySelector(
        ".showcase-project-name"
      );
      showcaseProjectName.classList.add(
        "animate__animated",
        "animate__fadeInRight"
      );
      showcaseProjectName.style.animationDelay = "0.5s";

      // showcase description animation
      const showcaseProjectDescription = document.querySelectorAll(
        ".showcase-project-description"
      );
      showcaseProjectDescription.forEach((item) => {
        item.classList.add("animate__animated", "animate__fadeInUp");
        item.style.animationDelay = "0.7s";
      });

      // showcase techstack
      const showcaseProjectTechStack = document.querySelector(
        ".showcase-project-techstack"
      );
      showcaseProjectTechStack.classList.add(
        "animate__animated",
        "animate__fadeInUp"
      );
      showcaseProjectTechStack.style.animationDelay = "0.9s";

      // showcase techstack images
      const showcaseProjectTechstackImages = document.querySelectorAll(
        ".showcase-project-techstack-icon"
      );
      let index = 1;
      showcaseProjectTechstackImages.forEach((image) => {
        image.classList.add("animate__animated", "animate__fadeInUp");
        image.style.animationDelay = `${index}s`;
        index += 0.3;
      });

      // other projects
      const projects = document.querySelectorAll(".project");
      let index2 = 1;
      projects.forEach((project) => {
        project.classList.add("animate__animated", "animate__fadeInUp");
        project.style.animationDelay = `${index2}s`;
        index2 += 0.3;
      });
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}
