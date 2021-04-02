import logo from "./logo.svg";
import "./App.css";

function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}

async function askUserPermission() {
  return await Notification.requestPermission();
}

askUserPermission();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{isPushNotificationSupported ? "Support" : "No notify support"}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ciao
        </a>
      </header>
    </div>
  );
}

export default App;
