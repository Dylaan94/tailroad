import React, { useEffect } from "react";

import Layout from "../components/layout/Layout";

//image imports
import temple from "../images/temple.jpg";
import WorkedWith from "../components/pages/home/WorkedWith";
import ContactUsForm from "../components/pages/contact/ContactUsForm";

export default function Contact() {
  useEffect(() => {
    console.log("scrolling to top");
    window.scrollTo(0, 0);

    const contactUsImage = document.querySelector(".contact-us-image");
    contactUsImage.classList.add("animate__animated", "animate__fadeInLeft");
    contactUsImage.style.animationDelay = "0.5s";

    const contactUsFormDiv = document.querySelector(".contact-us-form-div");
    contactUsFormDiv.classList.add("animate__animated", "animate__fadeInRight");
    contactUsFormDiv.style.animationDelay = "0.5s";
  }, []);

  return (
    <Layout>
      <div className="contact-us flex h-[calc(100vh-6rem)] w-full justify-center">
        <div className="container flex w-3/4 flex-col items-center justify-center ">
          <h2
            style={{ animationDelay: "1s" }}
            className="animate__animated animate__fadeInDown self-start text-5xl text-white underline decoration-primary-green"
          >
            Get in touch
          </h2>
          <ContactUsForm />
        </div>
      </div>
      <WorkedWith />
    </Layout>
  );
}
