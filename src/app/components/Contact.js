import React from "react";
import { CONTACT } from "../../../constants/Constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="my-4"
        >
          {CONTACT.phoneNo}
        </a>
        <br />
        <a href={`mailto:${CONTACT.email}`} className="hover:underline">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
