import { Routes, Route } from "react-router-dom";
import NewsPage from "../pages/news";
import Course from "../components/Course";
import Error404 from "../pages/Error-404";
import Home from "../pages/home";
import Courses from "../pages/courses";
import Entrants from "../pages/entrants";

const Router = () => {
  return (
    <>
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
    </>
  );
};

export default Router;
