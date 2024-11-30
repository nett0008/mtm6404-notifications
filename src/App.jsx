import React, { useState } from 'react';
import './App.css';
import notifications from './notifications';
import NotificationWrapper from './NotificationWrapper';

function App() {
  const [notificationList, setNotificationList] = useState(notifications);

  // Clear individual notification by ID
  const clearNotification = (id) => {
    setNotificationList(notificationList.filter((notification) => notification.id !== id));
  };

  // Clear all notifications
  const clearAllNotifications = () => {
    setNotificationList([]);
  };

  return (
    <div className="App">
      <h1 className="mb-4">Notification List</h1>
      <p>Total Notifications: {notificationList.length}</p>

      {/* Using NotificationWrapper to render notifications */}
      <NotificationWrapper>
        {notificationList.map((notification) => (
          <div key={notification.id} className="notification card mb-3 p-3">
            <h5 className="card-title">{notification.name}</h5>
            <p className="card-text">{notification.message}</p>
            <button
              className="btn btn-danger mt-2"
              onClick={() => clearNotification(notification.id)}
            >
              Clear Notification
            </button>
          </div>
        ))}
      </NotificationWrapper>

      <button className="btn btn-primary mt-4" onClick={clearAllNotifications}>
        Clear All Notifications
      </button>
    </div>
  );
}

export default App;
