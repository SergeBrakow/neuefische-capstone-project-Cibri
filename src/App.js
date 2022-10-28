import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route
          path="login"
          element={<Login />}
        />
        <Route
          path="home"
          element={<Home />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
