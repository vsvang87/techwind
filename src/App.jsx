import { useState } from "react";
import "./sass/style.scss";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Banner />
      <Section1 />
      <Section2 />
    </>
  );
}

export default App;
