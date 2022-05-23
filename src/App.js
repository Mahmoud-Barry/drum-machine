import React from "react";

function App() {

  function play(str) {

    if (str === "q" || str === "Q") {
      document.getElementById('display').innerText = "Rock on!";
    } else if (str === "w" || str === "W") {
      document.getElementById('display').innerText = "Drum Roll!";
    } else if (str === "e" || str === "E") {
      document.getElementById('display').innerText = "Music Time!";
    } else if (str === "a" || str === "A") {
      document.getElementById('display').innerText = "Big Hit!";
    } else if (str === "s" || str === "S") {
      document.getElementById('display').innerText = "Party On!";
    } else if (str === "d" || str === "D") {
      document.getElementById('display').innerText = "Jamming on!";
    } else if (str === "z" || str === "Z") {
      document.getElementById('display').innerText = "Popstarts!";
    } else if (str === "x" || str === "X") {
      document.getElementById('display').innerText = "On the mood!";
    } else if (str === "c" || str === "C") {
      document.getElementById('display').innerText = "On the rythm!";
    }
    var audio = document.getElementById(str);
    audio.play();
  }
  window.document.onkeyup = function(event) {
    let keystroke = event.key
    if (keystroke === "q" || keystroke === "Q") {
      play("Q");
    } else if (keystroke === "w" || keystroke === "W") {
      play("W");
    } else if (keystroke === "e" || keystroke === "E") {
      play("E");
    } else if (keystroke === "a" || keystroke === "A") {
      play("A");
    } else if (keystroke === "s" || keystroke === "S") {
      play("S");
    } else if (keystroke === "d" || keystroke === "D") {
      play("D");
    } else if (keystroke === "z" || keystroke === "Z") {
      play("Z");
    } else if (keystroke === "x" || keystroke === "X") {
      play("X");
    } else if (keystroke === "c" || keystroke === "C") {
      play("C");
    }
  }
  return (
    <div >
        <div className="container d-flex align-items-center flex-column justif-content-center" id="drum-machine">
            <h1 className="text-center">A Drum Machine</h1>
            <div className="row  w-100 justify-content-around">
              <div className="col">
                <div className="row  justify-content-between text-center">
                    <button className="drum-pad btn  btn-primary col" id="drum-0" onClick={()=>play("Q")}>
                      Q
                      <audio src="./audio/Q.mp3" className="clip" id="Q" />
                    </button>
                    <button className="drum-pad btn  btn-primary col" id="drum-1"  onClick={()=>play("W")}>
                      W
                      <audio src="./audio/W.mp3" className="clip" id="W" />
                    </button>
                    <button className="drum-pad btn  btn-primary col" id="drum-2"  onClick={()=>play("E")}>
                      E
                      <audio src="./audio/E.mp3" className="clip" id="E" />
                    </button>
                </div>

                <div className="text-center row justify-content-around">
                  <button className="drum-pad btn  btn-primary col" id="drum-3"  onClick={()=>play("A")}>
                    A
                    <audio src="./audio/A.mp3" className="clip" id="A" />
                  </button>
                  <button className="drum-pad btn  btn-primary col" id="drum-4" onClick={()=>play("S")}>
                    S
                    <audio src="./audio/S.mp3" className="clip" id="S" />
                  </button>
                  <button className="drum-pad btn  btn-primary col" id="drum-5"  onClick={()=>play("D")}>
                    D
                    <audio src="./audio/D.mp3" className="clip" id="D" />
                  </button>
                </div>

                <div className="text-center row getter">
                    <button className="drum-pad btn  btn-primary col" id="drum-6"  onClick={()=>play("Z")}>
                      Z
                      <audio src="./audio/Z.mp3" className="clip" id="Z" />
                    </button>
                    <button className="drum-pad btn  btn-primary col" id="drum-7"  onClick={()=>play("X")}>
                      X
                      <audio src="./audio/X.mp3" className="clip" id="X" />
                    </button>
                    <button className="drum-pad btn  btn-primary col" id="drum-8"  onClick={()=>play("C")}>
                      C
                      <audio src="./audio/C.mp3" className="clip" id="C" />
                    </button>
                </div>
              </div>
              <div className="col">
                <button className="btn btn-success"  id="display">Click a button to play!</button>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
