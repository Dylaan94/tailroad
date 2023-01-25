import React from "react";
import CodeEditor from "../../CodeEditor";

// images

import programmer from "../../../images/programmer.png";

const content = [
  {
    heading: "web-development.js",
    content: `export default function webDevelopment() {
  return (
    <section>

      <h1>Web Development</h1>

      <p>
        We provide tailored solutions for businesses of all sizes including
        e-commerce and blogging platforms. We prioritize flexibility and
        control, collaborating closely with clients to meet their unique needs
        and goals.
      </p>
      
    </section>
  );
}

`,
    lang: "javascript",
  },
  {
    heading: "web-design.html",
    content: `<html>
  <head>
    <title> Web Design </title>
  </head>

  <body>
    <p>
      we are here to bring your vision to life. we offer customisable packages
      to fit your specific needs and budget. with our user-friendly platforms
      and intuitive design, we'll have you up and running in no time
    </p>
  </body>
</html>
`,
    lang: "html",
  },
  {
    heading: "app-development.js",
    content: `export default class appDevelopment extends Component {
  render() {
    return (
      <View>
        <Text> App Development </Text>

        <Text>
          in need of a custom mobile app? from concept to launch we guide you
          through the process and work closely to ensure that your app meets
          your specific needs and goals.
        </Text>
            
      </View>
    );
  }
}
`,
    lang: "javascript",
  },
  {
    heading: "localisation.py",
    content: `class Localisation:

    def translate(self):
        print("""

        do you need your site to be multilingual?
        we have a wide network of professional translators
        to ensure accurate and effective translation
        for a global audience.

        """)


L = Localisation()
L.translate()
`,
    lang: "python",
  },
];

export default function OurServices() {
  return (
    <div className="our-services flex h-[80vh] w-11/12 justify-around">
      <div className="img-div flex-end flex h-2/3 w-1/6">
        <img
          src={programmer}
          className="programmer-img h-60 w-60 min-w-[15rem]"
        />
      </div>

      <div className="services-editor h-[600px] w-[900px]">
        <CodeEditor title="tailroad.features" content={content} />
      </div>
    </div>
  );
}
