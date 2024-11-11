import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import notifications from './notifications';
import NotificationWrapper from './NotificationWrapper';

function App() {
  const [notificationList, setNotificationList] = useState(notifications);

  // Clear individual notification by ID
  const clearNotification = (id) => {
    setNotificationList(notificationList.filter(notification => notification.id !== id));
  };

  // Clear all notifications
  const clearAllNotifications = () => {
    setNotificationList([]);
  };

  return (
    <div className="App">
      <div className="header mb-4">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1 className="mb-4">Notification List</h1>
      <p>Total Notifications: {notificationList.length}</p>

      {/* Using NotificationWrapper with children */}
      <NotificationWrapper>
        {notificationList.map(notification => (
          <div key={notification.id} className="notification animate__animated animate__fadeIn">
            <h2>{notification.name}</h2>
            <p>{notification.message}</p>
            <button
              className="btn btn-danger mt-3"
              onClick={() => clearNotification(notification.id)}
            >
              Clear Notification
            </button>
          </div>
        ))}
      </NotificationWrapper>

      <div className="card mt-4">
        <button className="btn btn-primary" onClick={clearAllNotifications}>
          Clear All Notifications
        </button>
      </div>
    </div>
  );
}

export default App;
