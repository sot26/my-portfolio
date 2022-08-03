import Navbar from "./component/Navbar"
import Home from "./component/Home"
import About from "./component/About";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Projects from "./component/Projects";
import Sidebar from "./component/Sidebar";

function App() {

  

  return (
    <div>
        <Navbar />
        <Sidebar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
