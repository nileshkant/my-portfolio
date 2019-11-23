import React from 'react';
import react from '../../assets/images/react.png';
import javascript from '../../assets/images/javascript.png';
import sass from '../../assets/images/sass.png';

const SpecializeIn = [
  {
    icon: react,
    title: 'React.Js',
    experience: '2 Years 1 Month',
    description: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
  },
  {
    icon: javascript,
    title: 'Javascript',
    experience: '2 Years 1 Month',
    description: 'JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it\'s used in many non- browser environments as well.It is a prototype - based, multi - paradigm scripting language that is dynamic, and supports object - oriented, imperative, and functional programming styles.'
  },
  {
    icon: sass,
    title: 'SASS',
    experience: '2 Years 1 Month',
    description: 'Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS. '
  },
  {
    icon: react,
    title: 'React Native',
    experience: '6 Months',
    description: 'React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.'
  },
];

const Section2 = () => {
  return (
    <section>
      <div className="container pb-5">
        <div className="row my-5">
          <div className="col-12 text-center fs-20 colorRed text-uppercase">
            What I do?
          </div>
          <div className="col-12 text-center colorVoilet my-2 fs-36 robo-700 text-uppercase">
            Specializing In
          </div>
        </div>
        <div className="row">
          {SpecializeIn.map((tech) => {
            return (
              <div className="col-md-6 col-12 my-4">
                <div className="row">
                  <img src={tech.icon} alt={tech.title} className="col-3 align-self-center" />
                  <div className="col-9">
                    <div className="row">
                      <div className="col-8 fs-20 colorVoilet text-uppercase my-3">
                        {tech.title}
                      </div>
                      <div className="col-4 fs-12 colorRed text-uppercase align-self-center">
                        {tech.experience}
                      </div>
                      <div className="col-12 mont-300">
                        {tech.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section2;
