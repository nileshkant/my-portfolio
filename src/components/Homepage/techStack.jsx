import React, { useState } from 'react';
import cn from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

const TechStack = ({ tech }) => {
  const [visible, setVisible] = useState(false);

  const onVisibilitySensorChange = (isVisible) => {
    if (isVisible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <VisibilitySensor
      onChange={(e) => onVisibilitySensorChange(e)}
      partialVisibility
    >
      <div className="col-md-6 col-12 my-4">
        <div className="row">
          <i className={cn(`${tech.icon} col-md-3 col-2 align-self-center fs-50 text-center px-0`, visible ? 'animated zoomIn fast' : 'invisible')} />
          <div className="col-md-9 col-10">
            <div className="row">
              <div className="col-8 fs-20 colorVoilet text-uppercase">
                {tech.title}
              </div>
              <div className="col-4 fs-12 colorRed text-uppercase align-self-center text-right">
                {tech.experience}
              </div>
              <div className="col-12 my-3">
                <div className="meter">
                  <span style={{ width: `${tech.rating}%` }}>
                    <span className="progress" />
                  </span>
                </div>
              </div>
              <div className="col-12 mont-300 text-justify">
                {tech.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default TechStack;
