import React from "react";
import Navbar from "../Navbar";
import { properties } from "../../properties";
import { useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";

export function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Quote() {
  let quote = useQuery();
  let serviceName = properties.services[quote.get("service")];

  return (
    <div>
      <Navbar
        aboutTitle="About"
        servicesTitle="Services"
        contactTitle="Contact"
        workshopTitle="Find workshops near you..."
      />
      <ContactForm
        titleText={'Request Quote for "' + serviceName + '"'}
        submitBtnText="Request Quote"
        requireMessage={false}
      />
    </div>
  );
}

export default Quote;
