import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import Featured from "./components/Featured";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Featured />
      <About />
    </div>
  );
}

export default App;
