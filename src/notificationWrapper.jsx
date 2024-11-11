// NotificationWrapper.jsx
import React from 'react';

function NotificationWrapper({ children }) {
  return (
    <div className="container notifications">
      {children}
    </div>
  );
}

export default NotificationWrapper;
