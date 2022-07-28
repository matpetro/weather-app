import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherDisplay />
      <Footer />
    </div>
  );
}

export default App;
