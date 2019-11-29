import React from 'react';
import { VerticalTimelineElement, VerticalTimeline } from '../timeline';

const career = [
  {
    id: 1,
    organization: 'Sakhatech Information Systems PVT LTD',
    position: 'Software Engineer',
    from: '10/2017',
    to: null,
    percentage: null,
    cgpa: null,
    branch: null,
    location: 'Bengaluru / Bangalore',
    icon: 'iconoffice'
  },
  {
    id: 2,
    organization: 'Arya College of Engg. & IT',
    position: null,
    from: '07/2013',
    to: '05/2017',
    percentage: 64.8,
    cgpa: null,
    branch: 'Electronics and Communication',
    location: 'Jaipur',
    icon: 'iconuniversity'
  },
  {
    id: 3,
    organization: 'A. N. College',
    position: null,
    from: '04/2011',
    to: '04/2013',
    percentage: 63.8,
    cgpa: null,
    branch: 'PCM',
    location: 'Patna',
    icon: 'iconschool'
  },
  {
    id: 4,
    organization: 'Kendriya Vidyalaya',
    position: null,
    from: '03/2010',
    to: '03/2011',
    percentage: null,
    cgpa: 9.2,
    branch: null,
    location: 'Danapur Cantt, Patna',
    icon: 'iconbackpack'
  },
];


const Section4 = () => {
  return (
    <section>
      <div className="container">
        <div className="row my-4">
          <div className="col-12 text-center fs-20 colorRed text-uppercase">
            Qualification
          </div>
          <div className="col-12 text-center colorVoilet my-2 fs-36 robo-700 text-uppercase">
            My Education / Experience
          </div>
        </div>
        <VerticalTimeline>
          {career.map((expData, index) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={index === 0 ? { background: 'rgb(240, 94, 138)', color: '#fff' } : {}}
                contentArrowStyle={index === 0 ? { borderRight: '7px solid  rgb(240, 94, 138)' } : {}}
                date={`${expData.from} - ${expData.to || 'Present'}`}
                iconStyle={index % 2 ? { background: 'rgb(240, 94, 138)', color: '#fff' } : { background: 'rgb(7, 30, 70)', color: '#fff' }}
                icon={<span className={`icon ${expData.icon} fs-30 m-fs-20`} />}
              >
                <h4 className="vertical-timeline-element-title">
                  {expData.organization}
                </h4>
                <h5 className="vertical-timeline-element-subtitle py-2">
                  {expData.location}
                </h5>
                <p>{expData.position || expData.branch || ''}</p>
                <p>{(expData.percentage && `${expData.percentage} %`) || (expData.cgpa && `${expData.cgpa} CGPA`) || ''}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Section4;
