import { useState } from "react";
import "./sass/style.scss";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Section1 from "./components/Section1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Banner />
      <Section1 />
    </>
  );
}

export default App;
