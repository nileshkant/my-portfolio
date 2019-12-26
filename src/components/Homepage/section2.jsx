import React from 'react';
import TechStack from './techStack';

const SpecializeIn = [
  {
    icon: 'devicon-react-original colored',
    title: 'React.Js',
    experience: '2Y - 2M',
    rating: 90,
    description: `React makes it painless to create interactive UIs.
                  Design simple views for each state in your application,
                  and React will efficiently update and render just the right components when your data changes.`
  },
  {
    icon: 'devicon-javascript-plain colored',
    title: 'Javascript',
    experience: '2Y - 2M',
    rating: 70,
    description: `JavaScript® (often shortened to JS) is a lightweight,
                  interpreted, object-oriented language with first-class functions,
                  and is best known as the scripting language for Web pages.`
  },
  {
    icon: 'devicon-sass-original colored',
    title: 'SASS',
    experience: '2Y - 2M',
    rating: 70,
    description: `Sass is a CSS preprocessor, which adds special features such as variables,
                  nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS.`
  },
  {
    icon: 'devicon-react-original colored',
    title: 'React Native',
    experience: '6M',
    rating: 80,
    description: `React Native combines the best parts of native development with React,
                  a best-in-class JavaScript library for building user interfaces.`
  },
  {
    icon: 'devicon-nodejs-plain colored',
    title: 'Node JS',
    experience: '6M',
    rating: 60,
    description: `As an asynchronous event-driven JavaScript runtime,
    Node.js is designed to build scalable network applications.`,
  },
  {
    icon: 'icon iconflutter',
    title: 'Flutter',
    experience: '4M',
    rating: 40,
    description: `Flutter is Google’s UI toolkit for building beautiful,
    natively compiled applications for mobile, web, and desktop from a single codebase.`,
    path: 5
  },
];

const Section2 = () => {
  return (
    <section>
      <div className="container p-5 bg-white-theme br-5 m-br-0">
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
              <TechStack tech={tech} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section2;
