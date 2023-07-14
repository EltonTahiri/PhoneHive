import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import Brands from "./routes/Brands";
import Phones from "./routes/products/Phones";
import Navbar from "./components/Navbar";

function App() {
  //*  reorganize the comps folder, to create some sub folders

  // const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  // const switchTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // };
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />

        {/* products category pages */}
        <Route path="/products/phones" element={<Phones />} />
      </Routes>
    </div>
  );
}

export default App;
