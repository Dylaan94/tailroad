import "./src/styles/global.scss";
import "./src/styles/components/_ServicesSection.css";
import "./src/styles/pages/about.scss";
import "./src/styles/components/_CodeEditor.scss";
import "./src/styles/forms.scss";
import "./src/styles/animations.scss";
import "@fontsource/josefin-sans";
import "@fontsource/josefin-sans/200.css";
import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/600.css";
// import "highlight.js/styles/github-dark-dimmed.css";

import "highlight.js/styles/atom-one-dark.css";

export function shouldUpdateScroll(prevRouterProps, { location }) {
  window.scrollTo(0, 0);
  const body = document.getElementsByTagName("body")[0];
  body.scrollTop = 0;
  return false;
}
