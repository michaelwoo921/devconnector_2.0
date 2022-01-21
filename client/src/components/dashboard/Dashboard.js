import React from 'react';

import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
const Dashboard = () => {
  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead"> Welcome John doe</p>
      <DashboardActions />
      <Experience />
      <Education />
      <div className="my-1">
        <button className="btn btn-danger"> Delete My Account</button>
      </div>
    </section>
  );
};

export default Dashboard;
