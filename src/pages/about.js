import React from "react";

import Layout from "../components/layout/Layout";

// images

import logoLarge from "../images/logo-large.svg";
import onomichiBridge from "../images/onomichi-bridge.png";

const About = () => {
  return (
    <Layout>
      <div className="container flex flex-col">
        <img src={onomichiBridge}></img>
        <div className="about-text mt-10">
          <h1 className=" text-6xl sm:text-7xl  text-right text-primary-green font-bold w-11/12 sm:w-full">
            the story of tailroad
          </h1>
          <div className="about-columns text-white sm:flex-row flex-col flex items-center sm:items-start w-full sm:justify-between py-12">
            <div className="left-col w-11/12 sm:w-[45%]">
              <p>
                
                Tailroad is a web design and development agency with roots in
                translation services. Our journey began in Japan, where we honed
                our skills in language and cultural translation. As we grew and
                expanded, we discovered a passion for web design and development
                and decided to pursue it as our main focus.
              </p>
              <p>
                The name Tailroad is a direct translation of Onomichi, the
                picturesque town in Japan where our company was founded.
                Onomichi is known for its winding streets and charming
                atmosphere, and we take inspiration from this in our approach to
                web design and development.
              </p>
              <p>
                The town is also famous for its suspension bridges and abundance
                of cat which are represented in our logo as a nod to our roots.
              </p>
            </div>
            <div className="right-col w-11/12 sm:w-[45%]">
              <p>
                We believe that every business has its own unique character and
                personality, and it's our mission to help you reflect that in
                your digital presence. We strive to create visually stunning and
                user-friendly website and apps that truly represent your brand.
              </p>
              <p>
                Our owner, originally from the UK, brings a unique perspective
                to our business philosophy. With experience in both Japan and
                the UK, we understand the importance of cultural sensitivity and
                the value of diverse perspectives. These values are at the core
                of our approach to design and development, and we strive to
                create solutions that are tailored to our clients' specific
                needs and goals. At Tailroad, we are dedicated to helping
                businesses succeed in the digital age. Whether you need a new
                website or a custom app, we have the skills and expertise to
                bring your vision to life.
              </p>
              <p>
                <span className="text-4xl font-bold text-primary-green">
                  contact us{" "}
                </span>
                today to learn more about how we can support your growth and
                success.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center py-4">
          <img src={logoLarge} alt="tailroad logo" />
        </div>
      </div>
    </Layout>
  );
};

export default About;

export const Head = () => <title>About Page</title>;
