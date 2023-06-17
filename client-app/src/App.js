import useLocalStorage from "use-local-storage";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Signup from "./routes/Signup";
import Login from "./routes/Login";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} theme={theme} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
