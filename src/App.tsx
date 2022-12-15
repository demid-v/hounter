import Header from "./components/Header";
import Hero from "./components/Hero";
import Recommendations from "./components/Recommendations";
import Reviews from "./components/Reviews";
import Tour from "./components/Tour";

function App() {
  return (
    <div className="relative overflow-hidden px-[7.5rem]">
      <Header />
      <Hero />
      <Recommendations />
      <Tour />
      <Reviews />
    </div>
  );
}

export default App;
