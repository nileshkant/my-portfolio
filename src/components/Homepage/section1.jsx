import React from 'react';
import character from '../../assets/images/person.svg';
import resume from '../../assets/images/Resume.pdf';


const Section1 = ({ darkMode, setDarkMode }) => {
  return (
    <section className="container fullViewHeight">
      <div className="row align-items-center fullViewHeight">
        <div className="col-md-7 col-12 mt-5">
          <div className="row">
            <div className="col-12 my-2">
              <h4>
                <span className="colorRed">
                  HELLO,
                </span>
                <span className="colorVoilet">
                  {' I\'M NILESH KANT'}
                </span>
              </h4>
            </div>
            <div className="col-12 colorVoilet my-2 fs-50 robo-700 lh-1">
              SOFTWARE ENGINEER
            </div>
            <div className="col-12 mb-2 robo-regular">
              JavaScript & Flutter Developer
            </div>
            <div className="col-12 mont-300">
              Playing with UI and focus on code quality
            </div>
          </div>
          <div className="row my-4">
            {/* <div className="col-md-4 col-6">
              <button type="button" className="btn btn-fill-outline color-primary btn-block">
                Hire Me
              </button>
            </div> */}
            <div className="col-md-4 col-6 mr-auto">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn btn-fill color-primary btn-block lh-43"
              >
                Download CV
              </a>
            </div>
            <div className="col-md-4 col-auto align-self-center">
              <div className="position-relative">
                <div className="toggleWrapper">
                  <input type="checkbox" className="dn" id="dn" onChange={setDarkMode} checked={darkMode} />
                  {/* eslint-disable-next-line */}
                  <label htmlFor="dn" className="toggle">
                    <span className="toggle__handler">
                      <span className="crater crater--1" />
                      <span className="crater crater--2" />
                      <span className="crater crater--3" />
                    </span>
                    <span className="star star--1" />
                    <span className="star star--2" />
                    <span className="star star--3" />
                    <span className="star star--4" />
                    <span className="star star--5" />
                    <span className="star star--6" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-12">
          <div className="row">
            <div className="col">
              <img src={character} alt="Me" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
