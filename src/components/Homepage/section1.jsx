import React from 'react';
import character from '../../assets/images/character.png';
import resume from '../../assets/images/Resume.pdf';


const Section1 = () => {
  return (
    <section className="container fullViewHeight">
      <div className="row align-items-center fullViewHeight">
        <div className="col-md-7 col-12">
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
            <div className="col-12 colorVoilet my-2 fs-50 robo-700">
              FRONTEND DEVELOPER
            </div>
            <div className="col-12 mont-300">
              Playing with UI and focus on code quality
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-4 col-6">
              <button type="button" className="btn btn-fill color-primary btn-block">
                Hire Me
              </button>
            </div>
            <div className="col-md-4 col-6">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn btn-fill-outline color-primary btn-block"
              >
                Download CV
              </a>
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
