import React, { useState } from 'react';
import cn from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

const Section5 = () => {
  const [visible, setVisible] = useState(false);

  const onVisibilitySensorChange = (isVisible) => {
    if (isVisible) {
      setVisible(true);
    }
  };

  return (
    <VisibilitySensor
      onChange={onVisibilitySensorChange}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-12 bg-white py-5 br-5 m-br-0 text-center">
            <div className="mont-600 pb-4">
              Did you like my profile?
              <span className="colorRed">
                {' Say Hello At'}
              </span>
            </div>
            <a
              href={`mailto:nileshkant10@gmail.com?subject=${encodeURIComponent('I like your profile')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="align-self-center colorVoilet"
            >
              <div className="d-inline-block">
                <div className={cn('fs-30 m-fs-20 mont-300', visible ? 'typewriter' : 'd-none')}>
                nileshkant10@gmail.com
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Section5;
