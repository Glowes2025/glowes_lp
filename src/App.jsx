import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Pages/Home";
import Layout2 from "./components/Layout/Layout2";
import ErrorPage from "./components/Pages/ErrorPage";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout2 darkMode />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
