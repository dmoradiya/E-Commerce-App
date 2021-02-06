/* 
Title: React / Redux / Router Project
Purpose:React / Redux / Router Assignment to demonstrate competence
Authors: Scriptorce (Dharmesh, Kenji, Ayesha and Amr)
Date of last edit: september 28, 2020 9:00 am
==============================================================================================*/

import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import KnowUsPageComponent from "./components/Knowus-page.jsx";
import NewsEventsPageComponent from "./components/News-events-page.jsx";
import CartPageComponent from "./components/Cart-page.jsx";
import LandingPageComponent from "./components/Landing-page.jsx";
import ShoppingPageComponent from "./components/Shopping-page.jsx";
import DonationPageComponent from "./components/Donation-page.jsx";
import HeaderComponent from "./components/Header.jsx";
import FooterComponent from "./components/Hero-footer.jsx";
import ProductDetailsOverlayComponent from "./components/Product-details-overlay.jsx";
import GlobalStore from "./components/store.jsx";
import StickyHeaderComponent from "./components/Sticky-header.jsx";
import VolunteerApplicationPageComponent from "./components/Volunteer-application-page.jsx";
import ThankYouPage from "./components/Thankyou-page.jsx";
import VolunteerConfPage from "./components/Volunteer-confirmation-page.jsx";
ReactDOM.render(
  <Provider store={GlobalStore}>
    <Router basename={process.env.PUBLIC_URL}>
      <HeaderComponent />
      <StickyHeaderComponent />
      <Route path="/thankyou" exact component={ThankYouPage} />{/* Order confirmation thank you page */}
      <Route path="/volnterconf" exact component={VolunteerConfPage} />{/* Volunteer application thank you page */}
      <Route path="/" exact component={LandingPageComponent} />{/* Landing page */}
      <Route path="/about" exact component={KnowUsPageComponent} /> {/* Know us page */}
      <Route path="/events" exact component={NewsEventsPageComponent} /> {/* Events and news page */}
      <Route path="/news" exact component={NewsEventsPageComponent} /> {/* Events and news page */}
      <Route path="/donation" exact component={DonationPageComponent} /> {/* Donation page */}
      <Route path="/shop" exact component={ShoppingPageComponent} />{/* Shopping page */}
      <Route path="/cart" exact component={CartPageComponent} /> {/* Shopping Cart page */}
      <Route path="/volunteer" exact component={VolunteerApplicationPageComponent}/> {/* Volunteer Application page */}
      <Route path="/product-quick-view" exact component={ProductDetailsOverlayComponent}/> {/* Products Page page */}
      <FooterComponent />
    </Router>
  </Provider>,
  document.getElementById("root")
);
