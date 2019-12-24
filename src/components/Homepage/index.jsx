import React from 'react';
import useDarkMode from '../ThemeProvider/use-dark-mode';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import FloatingButton from './floatingButtons';
import './index.css';
import LightRope from './lightrope';

const Homepage = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <>
      <div className="homeBackgroud">
        <section className="position-relative">
          <LightRope />
          {/* <div className="p-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setDarkMode(!darkMode)}
            >
              Toggle
            </button>
          </div> */}
          <Section1 darkMode={darkMode} setDarkMode={() => setDarkMode((!darkMode))} />
          <FloatingButton />
        </section>
        <Section2 />
        <Section3 />
        <Section4 darkMode={darkMode} />
        <Section5 />
      </div>
    </>
  );
};

export default Homepage;
