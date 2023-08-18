import Image from "next/image";
import contactImage from "/public/contact.png";
import Button from "@/components/Button/button";

export const metadata = {
  title: "Contact",
  description: "This is the contact page",
};

const Contact = () => {
  return (
    <div className="">
      {/* CONTAINER*/}
      <h2 className="text-center mb-20 font-extrabold text-6xl">
        Let&apos;s keep in touch
      </h2>
      {/* &apos for ' */}
      {/* Content Container */}
      <div className="flex items-center gap-24">
        {/* Image CONTAINER*/}
        <div className="flex-1 relative w-full h-110 animate-pulse">
          <Image
            src={contactImage}
            alt="contact-us"
            fill={true}
            className=" object-contain"
          />
        </div>
        {/* Form CONTAINER*/}
        <div className="flex-1">
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent p-5 border-2 border-button-text"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="bg-transparent p-5 border-2 border-button-text"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your message"
              className="bg-transparent p-5 border-2 border-button-text"
            ></textarea>
            <Button title="Submit" url="/submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
