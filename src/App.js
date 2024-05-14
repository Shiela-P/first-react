import logo from './logo.svg';
import './App.css';

function buttonDoStuff(){
  alert("I can make a message! So cool :)");
}

function newButton(){
  alert("WOOOOOOOOOOOOOOOOOOH! :0");
}

const imgAttributes = {
  src: "/coolPic.jpg",
  width: "50%",
  alt: "picture of an orange with blue skin"
};

function makeAnImage(){
return (
  <div>
    <img
    src={imgAttributes.src}/>
  </div>
)
}
//Ternary operator refresh x ? y : z
// if x is true, y       if x is false, z

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HI THERE!</h1>
        <p>figuring out how this works (React, that is)</p>
        <button onClick={buttonDoStuff}>Click Me! I do stuff.</button>
        <button onClick={newButton}>Howdy, I'm a brand new button. What do I do? Click to find out.</button>
        <button onClick={buttonDoStuff}>blah blah blah</button>
      </header>

      {/* Variable Attributes */}
      <div>
      
      </div>
    </div>
    
  );
}

export default App;
