import React, { useState } from 'react';
import cn from 'classnames';
import facebook from '../../assets/images/facebook.svg';
import gmail from '../../assets/images/gmail.svg';
import insta from '../../assets/images/instagram.svg';
import github from '../../assets/images/github.svg';

const FloatingButton = () => {
  const [toggle, setToggle] = useState(false);

  const toggleList = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="d-none d-lg-block floatingButtons position-absolute">
        <a
          href="https://www.github.com/nileshkant"
          target="_blank"
          rel="noopener noreferrer"
          className="align-self-center"
        >
          <img src={github} alt="github" height="50" className="mx-3 avatar" />
        </a>
        <a
          href={`mailto:nileshkant10@gmail.com?subject=${encodeURIComponent('I like your profile')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="align-self-center"
        >
          <img src={gmail} alt="gmail" height="50" className="mx-3 avatar" />
        </a>
        <a
          href="https://www.facebook.com/nileshkantofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="align-self-center"
        >
          <img src={facebook} alt="facebook" height="50" className="mx-3 avatar" />
        </a>
        <a
          href="https://www.instagram.com/nileshkant"
          target="_blank"
          rel="noopener noreferrer"
          className="align-self-center"
        >
          <img src={insta} alt="instagram" height="50" className="mx-3 avatar" />
        </a>
      </div>

      <div id="circularMenu" className={cn('circular-menu d-block d-lg-none', toggle ? 'active' : '')}>

        <div className="floating-btn" onClick={toggleList} role="button" onKeyDown={toggleList} tabIndex="0">
          <i className="icon iconnetwork" />
        </div>

        <menu className="items-wrapper">
          <a
            href="https://www.github.com/nileshkant"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-item icon icongithub"
          >
            <span />
          </a>
          <a
            href="https://www.facebook.com/nileshkantofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-item icon iconfacebook"
          >
            <span />
          </a>
          <a
            href="https://www.instagram.com/nileshkant"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-item icon iconinstagram"
          >
            <span />
          </a>
          <a
            href="https://www.linkedin.com/in/nilesh-kant-89878384"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-item icon iconlinkedin"
          >
            <span />
          </a>
        </menu>

      </div>
    </>
  );
};

export default FloatingButton;
