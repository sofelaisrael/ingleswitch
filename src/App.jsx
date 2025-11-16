import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Footer />
    </>
  );
}

export default App;
