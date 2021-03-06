import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

/* eslint-disable */
const VerticalTimelineElement = ({
  id,
  children,
  className,
  contentArrowStyle,
  contentStyle,
  icon,
  iconStyle,
  style,
  date,
  position,
  iconOnClick,
  visibilitySensorProps,
  dateStyle,
  animatedType
}) => {
  const [visible, setVisible] = useState(false);
  const onVisibilitySensorChange = (isVisible) => {
    if (isVisible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <div
      id={id}
      className={classNames(className, 'vertical-timeline-element', {
        'vertical-timeline-element--left': position === 'left',
        'vertical-timeline-element--right': position === 'right',
        'vertical-timeline-element--no-children': children === '',
      })}
      style={style}
    >
      <VisibilitySensor
        {...visibilitySensorProps}
        onChange={onVisibilitySensorChange}
      >
        <div>
          <span
            style={iconStyle}
            onClick={iconOnClick}
            className={`vertical-timeline-element-icon ${
              visible ? animatedType : 'is-hidden'
            }`}
          >
            {icon}
          </span>
          {/* bounce-in */}
          <div
            style={contentStyle}
            className={`vertical-timeline-element-content ${
              visible ? animatedType : 'is-hidden'
            }`}
          >
            <div
              style={contentArrowStyle}
              className="vertical-timeline-element-content-arrow"
            />
            {children}
            <span
              style={dateStyle}
              className="vertical-timeline-element-date"
            >
              {date}
            </span>
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

VerticalTimelineElement.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  contentArrowStyle: PropTypes.shape({}),
  contentStyle: PropTypes.shape({}),
  icon: PropTypes.element,
  iconStyle: PropTypes.shape({}),
  iconOnClick: PropTypes.func,
  style: PropTypes.shape({}),
  date: PropTypes.node,
  position: PropTypes.string,
  visibilitySensorProps: PropTypes.shape({}),
  dateStyle: PropTypes.shape({}),
  animatedType: PropTypes.string,
};

VerticalTimelineElement.defaultProps = {
  id: '',
  children: '',
  className: '',
  contentArrowStyle: null,
  contentStyle: null,
  icon: null,
  iconStyle: null,
  style: null,
  date: '',
  position: '',
  iconOnClick: null,
  visibilitySensorProps: { partialVisibility: true, offset: { bottom: 40 } },
  dateStyle: {},
  animatedType: typeof window.orientation === 'undefined' ? "bounce-in" : "animated fadeIn",
};

export default VerticalTimelineElement;
