import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {
  return (
    <div>
      <label>
        Filter by name:
        <input type="text" onChange={onChange} />
      </label>
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}
