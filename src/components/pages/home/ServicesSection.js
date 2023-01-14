import React from "react";

//components
import SellingPoint from "../../SellingPoint";

const content = {};

export default function ServicesSection() {
  return (
    <div className="services-section bg-digbeth bg-cover h-[100vh] bg-center w-screen flex justify-center flex-row ">
      <div className="services-container flex flex-row w-4/5 max-w-screen-xl pt-36 pb-56">
        <div className="left-col w-2/5">
          <h2 className="text-7xl">services</h2>
          <p className="text-text-grey font-medium text-lg">
            here at tailroad we provide a range of services to help your
            business grow. from simple product pages to multi-language mobile
            apps, we have the skills and expertise to support you every step of
            the way
          </p>

          <p className="text-text-grey font-medium text-lg mt-4">
            <a className="font-bold text-black text-xl"> contact us </a> today
            to learn more about how we can help your business succeed
          </p>
        </div>

        <div className="right-col w-3/5">
          <div className="grid grid-cols-2 grid-rows-2">
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
