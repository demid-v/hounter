import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Recommendations from "./components/Recommendations";
import Reviews from "./components/Reviews";
import Subscription from "./components/Subscription";
import Tips from "./components/Tips";
import Tour from "./components/Tour";

function App() {
  return (
    <div className="relative mx-auto max-w-[120rem] overflow-hidden px-[7.5rem]">
      <Header />
      <Hero />
      <Recommendations />
      <Tour />
      <Reviews />
      <Tips />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
