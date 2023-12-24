import React from "react";
import temple from "../../../images/temple.jpg";
import LogoLarge from "../../../images/logoLarge.png";

export default function ContactUsForm() {
  return (
    <>
      <section className="contact-us-form relative  flex flex-col py-16 md:flex-row">
        <div className="left hidden w-2/5 pr-16 md:block">
          <img
            className="contact-us-image h-full w-full object-cover"
            src={temple}
          />
        </div>
        <div className="contact-us-form-div right flex w-full flex-col border-l-2 border-t-2 border-primary-green bg-primary-grey p-12 text-white md:w-3/5">
          <h1 className="pb-8 text-4xl text-white">contact us</h1>
          <div className="contact-us-form flex">
            <div className="contact-us-form-left flex w-full flex-col sm:w-2/3">
              {/* Form styles in _Form.scss */}
              <form
                method="post"
                action="https://getform.io/f/5919e827-a971-48ed-ad98-147817e8de0d"
                className="contact-us-form flex flex-col"
              >
                <label>
                  Name
                  <input type="text" name="name" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" />
                </label>
                <label>
                  Message
                  <input type="text" name="message" />
                </label>
                <button type="submit">Send</button>
              </form>
            </div>

            <div className="contact-us-form-right hidden w-1/3 sm:block">
              <h3 className="text-2xl ">Contact</h3>
              <p className="pb-8">dylan@tailroad.com</p>

              <h3 className="text-2xl ">Based in</h3>
              <p>UK</p>
              <p>Japan</p>
            </div>
          </div>
        </div>
      </section>
      <img
        src={LogoLarge}
        alt="logo"
        className="absolute bottom-0 right-0 h-1/5  opacity-10  lg:h-1/2 "
      />
    </>
  );
}
