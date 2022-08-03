import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { Progrmas } from "./components/Programs/Progrmas";
import { Reasons } from "./components/Reasons/Reasons";
import { Plans } from "./components/Plans/Plans";
import { Testmonias } from "./components/Testmonials/Testmonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Progrmas />
      <Reasons />
      <Plans />
      <Testmonias />
    </div>
  );
}

export default App;
