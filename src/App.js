import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Weather defaultCity="Hattingen" />
          </div>
        </div>
        <footer className="text-center">
          <a
            href="https://github.com/NatsukiSh/weather-react-challenge"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            Open-source code,
          </a>
          by July
        </footer>
      </div>
    </div>
  );
}

export default App;
