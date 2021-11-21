import React from 'react';
import PropTypes from 'prop-types';
import './PageTitle.scss';

const PageTitle = (props) => (
  <div className="PageTitle">
    <center><h2 className="mb-4 mt-4">{props.title}</h2></center>
  </div>
);

PageTitle.propTypes = {};

PageTitle.defaultProps = {};

export default PageTitle;