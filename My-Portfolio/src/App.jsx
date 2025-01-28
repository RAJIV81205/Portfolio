import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";
import ClickSpark from "./components/ClickSpark.jsx";

function App() {
  return (
    <>
      
      <Header />
      <Hero />
      <About />
      <Footer />

      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      />
    </>
  );
}

export default App;
