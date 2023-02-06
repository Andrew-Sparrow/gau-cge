import React from 'react';
import PropTypes from 'prop-types';

function Statement(props) {
  const {
    code,
    className = ''
  } = props;

  return (
    <div className={`statement ${className}`}>
      <p className='statement__code'>{code}</p>
    </div>
  );
}

Statement.propTypes = {
  code: PropTypes.string,
  className: PropTypes.string,
};

export { Statement };
