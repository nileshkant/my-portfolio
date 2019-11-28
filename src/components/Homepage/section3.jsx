import React, { useState } from 'react';
import cn from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

const projectDetails = [
  {
    id: 1,
    projectName: 'OneDine',
    description: `OneDine makes educated predictions and recommendations so that all your foodie adventures are
                  triumphant. Intuitive and intelligent,
                  the OneDine app is a helpful tool for when you’re dining out, but
                  unsure what to order.`,
    startDate: '10/2019',
    endDate: null,
    techUsed: ['React js - 16.10+', 'Redux', 'Redux thunk', 'Bootstrap 4+', 'SASS'],
    features: ['Apple Pay', 'QR scanner', 'Cart']
  },
  {
    id: 2,
    projectName: 'Knowledge Podium',
    description: `POD.WORKS is a digital online learning platform for seeking jobs, acquiring new skills,
                  connecting to the industry and
                  searching for right talent in your field using different method
                  includes video lectures, PDF documents, Interactive animations and lot more...`,
    startDate: '10/2018',
    endDate: '09/2019',
    techUsed: ['React js - 16.8+', 'Redux', 'Redux thunk', 'Bootstrap 4+', 'SASS', 'Video js'],
    features: ['Customised Video Player', 'Notes', 'Forum', 'Bookmarks']
  },
  {
    id: 3,
    projectName: 'Thrive/Caret (O3 Securities)',
    description: `Product provides asset management solutions for the everyday investor.
                  This includes onboarding, cash flow
                  management, stock portfolio management, notification engine and reporting tools.
                  The product is aimed at
                  providing the client's in-house portfolio solutions, previously served to
                  HNIs and Institutional Investors, to everyday retail clients.`,
    startDate: '10/2017',
    endDate: '09/2018',
    techUsed: ['React js - 15+', 'Redux', 'Redux thunk', 'Bootstrap 3+', 'SASS', 'Chart js', 'HighCharts', 'D3 Charts'],
    features: ['Pan Card Verification', 'BillDesk Payment Gateway Integration', 'Aadhaar Card Verification', 'Complex Chart Implementaion']
  }
];

const Section3 = () => {
  const [slide, setSlide] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isChanged, setChange] = useState('');

  const onVisibilitySensorChange = (isVisible) => {
    if (isVisible) {
      setVisible(typeof window.orientation === 'undefined');
    }
  };
  const changeSlide = (data) => {
    setChange('animated flipInX fast');
    if ((data === 1) && slide < projectDetails.length - 1) setSlide(slide + data);
    if ((data === -1) && slide > 0) setSlide(slide + data);
  };

  return (
    <VisibilitySensor
      onChange={onVisibilitySensorChange}
    >
      <section className="container mt-5">
        <div className="row align-items-center">
          <div className="col-12 col-md">
            <div className={cn('row', visible ? 'animated fadeIn' : '')}>
              <div className="col-12 text-center fs-20 colorRed text-uppercase">
                  Portfolios
              </div>
              <div className="col-12 text-center colorVoilet my-2 fs-36 robo-700 text-uppercase">
                  Latest Projects
              </div>
            </div>
          </div>
          <div className={cn('col-12 col-md my-5 bg-white br-5 m-br-0', visible ? 'animated fadeIn' : '')}>
            <div className="row">
              <div className="col-12 text-right px-0 mt-3">
                <span
                  role="button"
                  onClick={() => changeSlide(-1)}
                  onKeyDown={() => changeSlide(-1)}
                  tabIndex={0}
                  label="left arrow"
                  className={cn('fs-20 colorRed mx-3 cursor-pointer outline-0 icon iconleft-arrow-angle', { colorGrey: slide === 0 })}
                />
                <span
                  role="button"
                  onClick={() => changeSlide(1)}
                  onKeyDown={() => changeSlide(1)}
                  tabIndex={0}
                  label="right arrow"
                  className={cn('fs-20 colorRed mx-3 cursor-pointer outline-0 icon iconright-arrow-angle', { colorGrey: slide === projectDetails.length - 1 })}
                />
              </div>
              <div className="col-12">
                {projectDetails.map((project, index) => {
                  return (
                    <div key={project.id} className={cn('row p-3 mb-4', slide === index ? isChanged : 'd-none')}>
                      <div className="col-12 fs-20 colorRed robo-regular my-2 text-uppercase">
                        {project.projectName}
                      </div>
                      <div className="col-12 text-justify mb-3">
                        {project.description}
                      </div>
                      <div className="col-12 text-justify">
                        {project.techUsed.map((tech) => {
                          return (
                            <div className="chip m-2">
                              <div className="chip-head">{tech.slice(0, 1).toUpperCase()}</div>
                              <div className="chip-content">{tech}</div>
                              <div className="chip-close" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </VisibilitySensor>
  );
};

export default Section3;
