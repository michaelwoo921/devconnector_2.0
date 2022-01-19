import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
  return (
    <div className="alert-wrapper">
      {alerts.map((alert) => (
        <div id={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps, null)(Alert);
