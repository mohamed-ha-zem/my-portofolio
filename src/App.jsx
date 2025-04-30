import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Skills from './pages/skills';
import Projects from './pages/Projects';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <div>
            <Home />
            <Skills />
            <Projects />
            <ContactUs />
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;