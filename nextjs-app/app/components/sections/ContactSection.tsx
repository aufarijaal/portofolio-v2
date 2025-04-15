import React from "react";
import EmailMe from "../EmailMe";
import Image from "next/image";

const ContactSection = () => {
  return (
    <div id="contact-section" className="container relative mb-20">
      <div className="mx-auto max-w-2xl py-10 lg:max-w-7xl lg:px-12 flex flex-col gap-2 rounded-md">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-2 text-center">
            <h5 className="text-xl">Contact</h5>
            <h2 className="text-5xl font-bold text-green-500">
              Let&apos;s connect
            </h2>
          </div>

          <Image width="240" height="240" src="/emailme.png" alt="" />
        </div>

        <EmailMe email="rijalaufa0@gmail.com" />
      </div>
    </div>
  );
};

export default ContactSection;
