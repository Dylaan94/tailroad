import React from "react";

//components
import SellingPoint from "../../shared/SellingPoint";

const content = {};

export default function ServicesSection() {
  return (
    <div className="services-section md:bg-bg-grey lg:bg-digbeth flex w-screen flex-row justify-center bg-primary-grey bg-cover bg-center md:max-h-[800px] lg:h-[100vh] ">
      <div className="services-container flex w-11/12 max-w-screen-xl flex-col py-20 md:flex-row md:justify-between md:py-20">
        {/* left column */}
        <div className="left-col w-full md:w-1/3 lg:w-2/5">
          <h2 className="text-6xl lg:text-8xl">services</h2>
          <div className="separator w-20 border-[3px] border-primary-green"></div>
          <div className="text-container text-md w-full py-14 font-medium text-text-grey md:w-full xl:w-2/3 ">
            <p className="">
              here at tailroad we provide a range of services to help your
              business grow. from simple product pages to multi-language mobile
              apps, we have the skills and expertise to support you every step
              of the way
            </p>

            <p className=" mt-4">
              <a className="text-xl font-bold text-black"> contact us </a> today
              to learn more about how we can help your business succeed
            </p>
          </div>
        </div>
        {/* right column */}
        <div className="right-col w-full md:w-3/5">
          <div className=" flex flex-col md:grid md:grid-cols-2 md:grid-rows-2">
            <SellingPoint
              header="web design"
              description="we are here to bring your vision to life. we offer customisable packages to fit your specific needs and budget. with our user-friendly platforms and intuitive design, we'll have you up and running in no time"
            />
            <SellingPoint
              header="web development"
              description="we provide tailored solutions for businesses of all sizes including e-commerce and blogging platforms. we prioritize flexibility and control, collaborating closely with clients to meet their unique needs and goals"
            />
            <SellingPoint
              header="app development"
              description="in need of a custom mobile app? from concept to launch we guide you through the process and work closely to ensure that your app meets your specific needs and goals "
            />
            <SellingPoint
              header="localisation"
              description="do you need your site to be multilingual? we have a wide network of professional translators to ensure accurate and effective translation for a global audience "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
