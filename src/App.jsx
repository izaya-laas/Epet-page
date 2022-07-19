import Header from "./components/header/Header";
import { DarkProvider } from "./context/darkContext";
import { MobileProvider } from "./context/mobileContext";
import "./App.css";

import Footer from "./components/footer/Footer";
import Router from "./router/Router";

function App() {
  // const [dark, setDark] = useContext(darkContext);
  return (
    <MobileProvider>
      <DarkProvider>
        <Header />
        <Router />
        <Footer />
      </DarkProvider>
    </MobileProvider>
  );
}

export default App;

/* <IntroductionImage src={image} /> */

/* <div className="App relative z-10 bg-gradient-to-b from-white to-[#ffffff8a]"></div> */
