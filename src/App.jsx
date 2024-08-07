import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import CrimeResponses from "./pages/CrimeResponses";
import CrimeReports from "./pages/CrimeReports";
import LogIn from "./pages/LogIn";
import LogIn1 from "./pages/LogIn1";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/crime-responses":
        title = "";
        metaDescription = "";
        break;
      case "/crime-reports":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/log-in1":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/crime-responses" element={<CrimeResponses />} />
      <Route path="/crime-reports" element={<CrimeReports />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/log-in1" element={<LogIn1 />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
export default App;
