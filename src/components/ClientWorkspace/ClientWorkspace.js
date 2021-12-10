import React from 'react';
import './ClientWorkspace.scss';

import ClientProfile from '../../components/ClientProfile/ClientProfile'
import ClientProjectList from '../ClientProjectList/ClientProjectList';

const ClientWorkspace = () => (
  <div className="ClientWorkspace row">
    <ClientProfile />
    <ClientProjectList />
  </div>
);

export default ClientWorkspace;
