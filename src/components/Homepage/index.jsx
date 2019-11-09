import React from 'react';
import character from '../../assets/images/character.png';
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
                  <div className="col-12 colorGrey">
                    Playing with UI and focus on code quality
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
          <div className="floatingButtons position-absolute d-flex justify-content-between justify-content-md-start">
            <div className="align-self-center">
              <img src={github} alt="github" height="50" className="mx-3 avatar" />
            </div>
            <div className="align-self-center">
              <img src={gmail} alt="gmail" height="50" className="mx-3 avatar" />
            </div>
            <div className="align-self-center">
              <img src={facebook} alt="facebook" height="50" className="mx-3 avatar" />
            </div>
            <div className="align-self-center">
              <img src={insta} alt="instagram" height="50" className="mx-3 avatar" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
