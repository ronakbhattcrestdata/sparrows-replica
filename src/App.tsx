import React from "react";

// Componenets
import Header from "./components/Header";
import FooterNavbar from "./components/FooterNavbar";
import ContactDetail from "./components/pages/ContactDetail";

function App() {
  return (
      <div className="App">
        <Header />
        <h1> Custom React CSS Navbar </h1>
        <FooterNavbar />
      </div>
  );
}

export default App;
