import React, { useEffect } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/Layout";

// images

import logoLarge from "../images/logo-large.svg";
import onomichiBridge from "../images/onomichi-bridge.png";
import dylan from "../images/dylan.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container flex flex-col">
        <img
          className="fade-in h-auto w-full"
          lazy={true}
          src={onomichiBridge}
        ></img>
        <div className="about-text mt-10 w-full">
          <div className="about-header flex w-full flex-col items-center justify-between lg:flex-row">
            <div className="flex text-white">
              <img
                className="about-dylan h-24 object-fill sm:h-32"
                src={dylan}
                alt="dylan"
                lazy="true"
              />
              <span className="ml-8 flex flex-col justify-center">
                <h2 className="text-3xl">dylan brain</h2>
                <p className="text-xl font-bold text-primary-green">founder</p>
                <p className="hover:cursor-pointer hover:text-primary-green hover:underline">
                  <a href="mailto:dylan@tailroad.com">dylan@tailroad.com</a>
                </p>
              </span>
            </div>

            <h1 className=" mt-4 text-3xl font-bold text-primary-green sm:text-5xl md:mt-0 md:text-7xl">
              the story of tailroad
            </h1>
          </div>
          <div className="about-columns flex w-full flex-col items-center py-12 text-white sm:flex-row sm:items-start sm:justify-between">
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
                <Link
                  to={"/contact"}
                  className="text-4xl font-bold text-primary-green hover:cursor-pointer hover:underline"
                >
                  contact us
                </Link>{" "}
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
