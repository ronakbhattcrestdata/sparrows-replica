import React from "react";

// Componenets
import Header from "./components/Header";
import FooterNavbar from "./components/FooterNavbar";
import ContactDetail from "./components/pages/ContactDetail";

function App() {
  return (
      <div className="App">
        <Header />
        <ContactDetail />
        <FooterNavbar />
      </div>
  );
}

export default App;
