/*cspell:disable*/
import React from "react";
import HeaderComponent from "./Header";
import HeroSectionComponent from "./Hero-section";
import HeroFooterComponent from "./Hero-footer";
import ContactFormComponent from "./Contact-form";

/*=============================================
=         Landing page React Component        =
=============================================*/

const LandingPageComponent = () => {
  return (
    <>
      <HeroSectionComponent />
      <ContactFormComponent className="contactform-overlay" />
    </>
  );
};

/*=====  End of Landing page React Component  ======*/

export default LandingPageComponent;
