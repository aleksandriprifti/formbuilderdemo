import "./App.css";
import React from "react";
import AccordionForm from "./components/AccordionForm.js";
import CardForm from "./components/CardForm";
import ModalForm from "./components/UI/ModalForm";

function App() {
  return (
    <div className="app">
      <CardForm />
      <ModalForm />
    </div>
  );
}

export default App;
