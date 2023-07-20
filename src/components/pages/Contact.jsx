import React from "react";
import Navbar from "../Navbar";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div>
      <Navbar
        aboutTitle="About"
        servicesTitle="Services"
        contactTitle="Contact"
        workshopTitle="Find workshops near you..."
        lang="en"
      />
      <ContactForm
        titleText="Contact Steampunk"
        submitBtnText="Submit"
        requireMessage={true}
      />
    </div>
  );
}

export default Contact;
