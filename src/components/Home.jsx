import React from 'react';
import Hero from './Hero';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import PastEdition from './PastEdition';
import { Element } from 'react-scroll';
import TimeLine from './TimeLine';
import DepartmentFacultyProfile from './DepartmentFacultyProfile';


function Home() {
  return (
    <div style={{ background: 'transparent' }}>
      <Element name="hero" className=''>
        <section id="hero">
 
 
 
 
 
 


          <Hero />
        </section>
      </Element>

      <Element name="about" className=''>
        <section id="about">
          <About />
          <TimeLine />
        </section>
      </Element>

      <Element name="past">
        <section id="past">
          <PastEdition />
        </section>
      </Element>

      <Element name='faculty'>
        <section id='faculty'>
          <DepartmentFacultyProfile />
        </section>
      </Element>

      <Element name="contact">
        <section id="contact">
          <Contact />
        </section>
      </Element>

        <Footer />
    </div>
  );
}

export default Home;
