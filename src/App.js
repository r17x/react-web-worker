import React, {
  //useMemo,
  useState,
  useEffect,
  Component
} from "react";
import logo from "./logo.svg";
import "./App.css";

function W0rker(props) {
  const { url } = props;
  const [message, setMessage] = useState([]);

  console.log("Normal People");
  useEffect(() => {
    const worker = new Worker(url);
    worker.onmessage = ({ data }) => setMessage(message.concat([data]));
    worker.postMessage(["fetch", "https://api.github.com/users"]);
  }, []);

  return JSON.stringify(message);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <W0rker url="rin-worker.js" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
