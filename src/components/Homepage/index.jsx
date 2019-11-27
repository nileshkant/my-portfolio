import React, { useState } from 'react';
import cn from 'classnames';
import Section1 from './section1';
import Section2 from './section2';
import FloatingButton from './floatingButtons';
import './index.css';
import { VerticalTimelineElement, VerticalTimeline } from '../timeline';

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
    techUsed: ['React js', 'Redux', 'Redux thunk', 'Bootstrap 4^', 'SASS'],
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
    techUsed: ['React js', 'Redux', 'Redux thunk', 'Bootstrap 4^', 'SASS'],
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
    techUsed: ['React js', 'Redux', 'Redux thunk', 'Bootstrap 4^', 'SASS', 'Chart js', 'HighCharts', 'D3 Charts'],
    features: ['Pan Card Verification', 'BillDesk Payment Gateway Integration', 'Aadhaar Card Verification', 'Complex Chart Implementaion']
  }
];

const Homepage = () => {
  const [slide, setSlide] = useState(0);

  const changeSlide = (data) => {
    if ((data === 1) && slide < projectDetails.length - 1) setSlide(slide + data);
    if ((data === -1) && slide > 0) setSlide(slide + data);
  };


  return (
    <>
      <div className="homeBackgroud">
        <section className="position-relative">
          <Section1 />
          <FloatingButton />
        </section>
        <Section2 />
        <section>
          <div className="container mt-5">
            <div className="row align-items-center">
              <div>
                <div className="row">
                  <div className="col-12 text-center fs-20 colorRed text-uppercase">
                    Portfolios
                  </div>
                  <div className="col-12 text-center colorVoilet my-2 fs-36 robo-700 text-uppercase">
                    Latest Projects
                  </div>
                </div>
              </div>
              <div className="col-md col-12 my-5 bg-white">
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
                {projectDetails.map((project, index) => {
                  return (
                    <div key={project.id} className={cn('row p-3 mb-4', { 'd-none': slide !== index })}>
                      <div className="col-12 fs-20 colorRed robo-regular my-2 text-uppercase">
                        {project.projectName}
                      </div>
                      <div className="col-12 text-justify">
                        {project.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<span className="icon iconright-arrow-angle" />}
            >
              <h3 className="vertical-timeline-element-title">Creative Director</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<span className="icon iconright-arrow-angle" />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<span className="icon iconright-arrow-angle" />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>
      </div>
    </>
  );
};

export default Homepage;
