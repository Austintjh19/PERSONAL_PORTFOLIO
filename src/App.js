import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
