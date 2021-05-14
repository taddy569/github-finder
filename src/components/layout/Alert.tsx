import React, { useContext, FC } from "react";

import AlertContext from "../../context/alert/alertContext";

const Alert: FC = () => {
  const { alert } = useContext(AlertContext);

  return !alert ? null : (
    <div className={`alert alert-${alert.type}`}>
      <i className="fas fa-info-circle" /> {alert.msg}
    </div>
  )
};

export default Alert;
