import React from "react";

//components
import SellingPoint from "../../SellingPoint";

const content = {};

export default function ServicesSection() {
  return (
    <div className="services-section bg-white md:bg-bg-grey lg:bg-digbeth bg-cover lg:h-[100vh] md:max-h-[800px] bg-center w-screen flex justify-center flex-row ">
      <div className="services-container flex flex-col md:justify-between md:flex-row w-11/12 max-w-screen-xl md:py-20 py-20">
        {/* left column */}
        <div className="left-col w-full md:w-1/3 lg:w-2/5">
          <h2 className="text-6xl lg:text-8xl">services</h2>
          <div className="separator border-[3px] border-primary-green w-20"></div>
          <div className="text-container py-14 w-full md:w-full xl:w-2/3 text-text-grey font-medium text-md ">
            <p className="">
              here at tailroad we provide a range of services to help your
              business grow. from simple product pages to multi-language mobile
              apps, we have the skills and expertise to support you every step
              of the way
            </p>

            <p className=" mt-4">
              <a className="font-bold text-black text-xl"> contact us </a> today
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
