import React from 'react';
import PropTypes from 'prop-types';

const Output = ({ output }) => (
  <div className="output">{output}</div>
);

Output.propTypes = {
  output: PropTypes.string.isRequired,
};

export default Output;
