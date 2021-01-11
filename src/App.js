import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a>
          Learn React
        </a>
        <div>
          <Counter initialCount={1} color="white"/>
        </div>
      </header>
      
    </div>
  );
}

export default App;
