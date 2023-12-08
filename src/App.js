import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Splash from "./pages/Splash";
import Signin from "./pages/Signin";
import Signup2 from "./pages/Signup2";
import Signup1 from "./pages/Signup1";

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
      case "/00-signin":
        title = "";
        metaDescription = "";
        break;
      case "/00-signup-2":
        title = "";
        metaDescription = "";
        break;
      case "/00-signup-1":
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
      <Route path="/" element={<Splash />} />
      <Route path="/00-signin" element={<Signin />} />
      <Route path="/00-signup-2" element={<Signup2 />} />
      <Route path="/00-signup-1" element={<Signup1 />} />
    </Routes>
  );
}
export default App;
