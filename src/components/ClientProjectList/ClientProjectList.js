import React from 'react';
import './ClientProjectList.scss';

import ClientProjectItem from '../../components/ClientProjectItem/ClientProjectItem'

const ClientProjectList = () => (
  <div className="ClientProjectList col-lg-9">
    <ClientProjectItem />
    <ClientProjectItem />
  </div>
);

export default ClientProjectList;
