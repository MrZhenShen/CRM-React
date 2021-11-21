import React from 'react';

import PropTypes from 'prop-types';
import './AdminPanel.scss';

import PageTitle from '../../components/PageTitle/PageTitle'
import ProjectList from '../../components/ProjectList/ProjectList'

const AdminPanel = () => {

  return (
    <div className="AdminPanel">
      <PageTitle title={"Admin panel"} />
      <ProjectList />
    </div>
  )
};

AdminPanel.propTypes = {};

AdminPanel.defaultProps = {};

export default AdminPanel;
