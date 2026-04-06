import React, { useState } from "react";


function App() {
  
  const [colr, setClr] = useState('red')

  function handleClr(clr){
    setClr(clr);
  }
  return (
    <div style={{backgroundColor: colr , minHeight: "100vh"}}>
      <h1>Hello India</h1>

      <button onClick={() => handleClr("blue")}>Blue</button>
      <button onClick={() => handleClr("green")}>Green</button>
      <button onClick={() => handleClr("yellow")}>Yellow</button>
    </div>
  );
}

export default App;