import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Componenets
import Header from "./components/Header";
import FooterNavbar from "./components/FooterNavbar";
import ContactDetail from "./components/pages/ContactDetail";
import Notification from "./components/pages/Notification";
import Home from "./components/pages/Home";

function App() {
  return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/contacts">
              <ContactDetail />
            </Route>
            <Route path="/notifications">
              <Notification />
            </Route>
          </Switch>
        </BrowserRouter>
        <FooterNavbar />
      </div>
  );
}

export default App;
