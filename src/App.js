import logo from './logo.svg';
import './App.css';

function buttonDoStuff(){
  alert("I can make a message! So cool.");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HI THERE!</h1>
        <p>figuring out how this works (React, that is)</p>
        <button onClick={buttonDoStuff}>Click Me! I do stuff.</button>
      </header>
    </div>
  );
}

export default App;
