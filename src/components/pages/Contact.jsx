import React from "react";
import Navbar from "../Navbar";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div>
      <Navbar />
      <ContactForm
        titleText="Contact Steampunk"
        submitBtnText="Submit"
        requireMessage={true}
      />
    </div>
  );
}

export default Contact;
