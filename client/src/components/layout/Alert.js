import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
  return (
    <div>
      {alerts.map((alert) => (
        <div id={alert.id}>{alert.msg}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps, null)(Alert);
