import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <>
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section id="about">
        <Parallax title="About Me" />
      </section>
      <section>
        <About />
      </section>
      <section id="portfolio">
        <Parallax title="What I Did?" />
      </section>
      <Portfolio />
      <section id="content">
        <Contact />
      </section>
    </>
  );
};

export default App;
