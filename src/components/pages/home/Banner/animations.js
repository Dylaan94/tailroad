export default function animations() {
  const handleScroll = () => {
    const banner = document.querySelector(".banner");
    const { top, bottom } = banner.getBoundingClientRect();
    const inView = top >= 0 && bottom <= window.innerHeight;
    if (inView) {
      const banner = document.querySelector(".banner");
      banner.classList.remove("opacity-0");
      // banner header animation

      const bannerHeader = document.querySelector(".bannerHeader");
      bannerHeader.classList.add("animate__animated", "animate__fadeInDown");
      // banner subheader animation
      const bannerSubheader = document.querySelector(".bannerSubheader");
      bannerSubheader.classList.add("animate__animated", "animate__fadeInLeft");
      bannerSubheader.style.animationDelay = "0.5s";
      // banner content animation
      const bannerContent = document.querySelector(".bannerContent");
      bannerContent.classList.add("animate__animated", "animate__fadeInUp");
      bannerContent.style.animationDelay = "0.7s";
      // banner link animation
      const bannerLink = document.querySelector(".bannerLink");
      bannerLink.classList.add("animate__animated", "animate__fadeInUp");
      bannerLink.style.animationDelay = "0.9s";
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}
