import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CrimeResponses from "./pages/CrimeResponses";
import CrimeReports from "./pages/CrimeReports";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import LogIn1 from "./pages/LogIn1";
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
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/log-in1":
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
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/crime-responses" element={<CrimeResponses />} />
      <Route path="/crime-reports" element={<CrimeReports />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/log-in1" element={<LogIn1 />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
export default App;
