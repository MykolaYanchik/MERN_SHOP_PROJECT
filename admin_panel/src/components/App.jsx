import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import links from "../utils/links";
import Layout from "./Layout";
import SignIn from "./SignIn";

function App() {
  const isAuth = false;

  return (
    <BrowserRouter>
      {isAuth ? (
        <Routes>
          <Route path={links.signIn} element={<Navigate to={links.main} />} />
          <Route path={links.main} element={<Layout />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Navigate to={links.signIn} />} />
          <Route path={links.signIn} element={<SignIn />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
