import Header from "./components/header/Header";
import "./App.css";

import Footer from "./components/footer/Footer";
import Router from "./router/Router";
import { useContext } from "react";
import darkContext from "./context/darkContext";

function App() {
  const { dark } = useContext(darkContext);
  return (
    <div className={dark ? "bg-[#f1f1f1]" : "bg-[#1f232b]"}>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;

/* <IntroductionImage src={image} /> */

/* <div className="App relative z-10 bg-gradient-to-b from-white to-[#ffffff8a]"></div> */
