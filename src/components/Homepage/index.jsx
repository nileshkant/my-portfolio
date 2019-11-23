import React from 'react';
import Section1 from './section1';
import Section2 from './section2';
import facebook from '../../assets/images/facebook.svg';
import gmail from '../../assets/images/gmail.svg';
import insta from '../../assets/images/instagram.svg';
import github from '../../assets/images/github.svg';
import './index.css';


const Homepage = () => {
  return (
    <>
      <div className="homeBackgroud">
        <section className="position-relative">
          <Section1 />
          <div className="floatingButtons position-absolute d-flex justify-content-between justify-content-md-start">
            <a href="https://www.github.com/nileshkant" target="_blank" rel="noopener noreferrer" className="align-self-center">
              <img src={github} alt="github" height="50" className="mx-3 avatar" />
            </a>
            <a href={`mailto:nileshkant10@gmail.com?subject=${encodeURIComponent('I like you profile')}`} target="_blank" rel="noopener noreferrer" className="align-self-center">
              <img src={gmail} alt="gmail" height="50" className="mx-3 avatar" />
            </a>
            <a href="https://www.facebook.com/nileshkantofficial" target="_blank" rel="noopener noreferrer" className="align-self-center">
              <img src={facebook} alt="facebook" height="50" className="mx-3 avatar" />
            </a>
            <a href="https://www.instagram.com/nileshkant" target="_blank" rel="noopener noreferrer" className="align-self-center">
              <img src={insta} alt="instagram" height="50" className="mx-3 avatar" />
            </a>
          </div>
        </section>
        <Section2 />
      </div>
    </>
  );
};

export default Homepage;
