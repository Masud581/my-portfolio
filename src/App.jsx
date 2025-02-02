import React from 'react';
import { Header, Hero, About, Projects, Education, Footer } from './components';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Education />
      < Contact />      
      <Footer />
    </div>
  );
}

export default App;