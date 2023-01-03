import React from 'react';
import './AdminPanel.scss';

import PageTitle from '../../components/PageTitle/PageTitle'
import ProjectList from '../../components/ProjectList/ProjectList'

const AdminPanel = () => {

  return (
    <div className="AdminPanel container">
      <PageTitle title={"Admin panel"} />
      <ProjectList />
    </div>
  )
};

export default AdminPanel;
