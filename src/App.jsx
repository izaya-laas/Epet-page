import Header from "./components/header/Header";
import { DarkProvider } from "./context/darkContext";
import { MobileProvider } from "./context/mobileContext";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewsPage from "./pages/news";
import Course from "./components/Course";
import Error404 from "./pages/Error-404";
import Home from "./pages/home";
import Courses from "./pages/courses";
import Entrants from "./pages/entrants";
import Footer from "./components/footer/Footer";

function App() {
  // const [dark, setDark] = useContext(darkContext);
  return (
    <MobileProvider>
      <DarkProvider>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="noticias" element={<NewsPage />} />
            <Route path="ingresantes" element={<Entrants />} />
            <Route path="cursos">
              <Route index element={<Courses />} />
              <Route path=":curso" element={<Course />} />
            </Route>
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </DarkProvider>
    </MobileProvider>
  );
}

export default App;

/* <IntroductionImage src={image} /> */

/* <div className="App relative z-10 bg-gradient-to-b from-white to-[#ffffff8a]"></div> */
