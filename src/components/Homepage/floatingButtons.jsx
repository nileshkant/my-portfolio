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

  const socialLink = [
    {
      name: 'Github', link: 'http://bit.ly/nilesh_git', imgLink: github, icon: 'icon icongithub'
    },
    {
      name: 'Gmail', link: `mailto:nileshkant10@gmail.com?subject=${encodeURIComponent('I like your profile')}`, imgLink: gmail, icon: ''
    },
    {
      name: 'Facebook', link: 'http://bit.ly/nilesh_fb', imgLink: facebook, icon: 'icon iconfacebook'
    },
    {
      name: 'Instagram', link: 'http://bit.ly/nilesh_ig', imgLink: insta, icon: 'icon iconinstagram'
    },
    {
      name: 'Linkedin', link: 'http://bit.ly/nilesh_linkedin', imgLink: '', icon: 'icon iconlinkedin'
    }
  ];

  return (
    <>
      <div className="d-none d-lg-block floatingButtons bg-white-theme position-absolute">
        {socialLink.map((links) => {
          return (
            <>
              {links.imgLink && (
              <a
                key={links.name}
                href={links.link}
                target="_blank"
                rel="noopener noreferrer"
                className="align-self-center"
              >
                <img src={links.imgLink} alt={links.name} height="50" className="mx-3 avatar" />
              </a>
              )}
            </>
          );
        })}
      </div>

      <div id="circularMenu" className={cn('circular-menu d-block d-lg-none', toggle ? 'active' : '')}>

        <div className="floating-btn" onClick={toggleList} role="button" onKeyDown={toggleList} tabIndex="0">
          <i className="icon iconnetwork" />
        </div>

        <menu className="items-wrapper">
          {socialLink.map((links) => {
            return (
              <>
                {links.icon && (
                <a
                  key={links.name}
                  href={links.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn('menu-item', links.icon)}
                >
                  <span />
                </a>
                )}
              </>
            );
          })}
        </menu>

      </div>
    </>
  );
};

export default FloatingButton;
