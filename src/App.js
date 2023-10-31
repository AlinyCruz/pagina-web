import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contatos from "./components/Contatos";

function App() {
  return (
    <div className="App">
      <Contatos />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
