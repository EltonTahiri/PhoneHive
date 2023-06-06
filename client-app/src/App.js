import useLocalStorage from "use-local-storage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      {/* example here is a route, and we need to add theme it it
      we need to pass theme as a prop, dmth like this theme={theme}
      same thing goes for switch theme */}
      <Navbar theme={theme} switchTheme={switchTheme} />
      <Routes></Routes>
    </div>
  );
}

export default App;
