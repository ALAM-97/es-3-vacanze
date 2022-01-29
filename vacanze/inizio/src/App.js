import React from "react";
// components
import Title from "./components/Title";
import Holiday from "./components/Holiday";
//Ho utilizzato Cartella Component per dare una chiara locazione ai miei componenti
function App() {
  return (
    <section className="section-center">
      <Title />
      <Holiday />
    </section>
  );
}

export default App;
