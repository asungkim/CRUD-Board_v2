import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedUser = jwtDecode(token);
      setUser({
        id: decodedUser.id,
        role: decodedUser.role,
        username: decodedUser.username,
      });
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
