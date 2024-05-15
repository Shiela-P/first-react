import logo from './logo.svg';
import './App.css';

function buttonDoStuff(){
  alert("I can make a message! So cool :)");
}

function newButton(){
  alert("WOOOOOOOOOOOOOOOOOOH! :0");
}
<<<<<<< HEAD
<<<<<<< HEAD

const imgAttributes = {
  src: "/coolPic.jpg",
  width: "50%",
  alt: "picture of an orange with blue skin"
};

function makeAnImage(){
return (
  <div>
    <img
    src={imgAttributes.src}
    alt={imgAttributes.alt}
    width={imgAttributes.width}/>
  </div>
)
}
=======
>>>>>>> parent of 228afc9 (still playing around and learning react. Learning to use attributes)
=======
>>>>>>> parent of 228afc9 (still playing around and learning react. Learning to use attributes)
//Ternary operator refresh x ? y : z
// if x is true, y       if x is false, z

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {makeAnImage()}
        <h1>HI THERE!</h1>
        <p>figuring out how this works (React, that is)</p>
        <button onClick={buttonDoStuff}>Click Me! I do stuff.</button>
        <button onClick={newButton}>Howdy, I'm a brand new button. What do I do? Click to find out.</button>
      </header>
    </div>
  );
}

export default App;
