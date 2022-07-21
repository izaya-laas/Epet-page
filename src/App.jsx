import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import Router from "./router/Router";
import { useContext } from "react";
import darkContext from "./context/darkContext";

function App() {
  const { isDark } = useContext(darkContext);
  return (
    <div
      className={
        isDark
          ? "bg-third-color text-fourth-color"
          : "bg-fourth-color text-primary-color"
      }
    >
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;

/* <IntroductionImage src={image} /> */

/* <div className="App relative z-10 bg-gradient-to-b from-white to-[#ffffff8a]"></div> */
