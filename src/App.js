import React from "react";
import "./styles/App.scss";
import { AboutPage, ContactPage, HomePage, ServicePage } from "./screens"
import { URL } from "./constants"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import { Footer, Navbar } from './components';


export default function App() {



  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path={URL} element={<HomePage />} />
          <Route exact path={URL + "services"} element={<ServicePage />} />
          <Route exact path={URL + "about"} element={<AboutPage />} />
          <Route exact path={URL + "contact"} element={<ContactPage />} />
        </Switch>
      </HashRouter>
      <Footer />
    </>
  );
}

