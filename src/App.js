import Homepage from "./pages/homepage";
import Router from "./components/Router/Router";
import { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );
  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <>
      <GlobalStyle />
      <div>
        <Router
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          handleLogout={handleLogout}
        />
      </div>
    </>
  );
}

export default App;
