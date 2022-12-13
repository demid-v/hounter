import Header from "./components/Header";
import Hero from "./components/Hero";
import Recommendations from "./components/Recommendations";
import Tour from "./components/Tour";

function App() {
  return (
    <div className="relative px-[7.5rem]">
      <Header />
      <Hero />
      <Recommendations />
      <Tour />
    </div>
  );
}

export default App;
