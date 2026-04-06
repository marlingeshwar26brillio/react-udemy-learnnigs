import {useCallback, useEffect, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)


  const [pass, setPass] = useState("")

  const passwordgen= useCallback(() =>{
    let securitKey = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


    // if(numbers) str += "0123456789";
    // if(chars) str += "!@#$%^&*()"


    for(let i = 0; i < length; ++i){
      let charIdx = Math.floor(Math.random() * str.length)
      securitKey += str.charAt(charIdx)
    }

    setPass(securitKey);
  }, [length])

  useEffect(() => {
      passwordgen();
    
  }, [length, passwordgen])
  return (
    <>
      <div style={{textAlign: 'center', padding : 200}}>
        <h1>Password generator</h1>
        <input type="text" 
          value={pass}
          placeholder='password please'
          readOnly
        />
        <button onClick={()=>navigator.clipboard.writeText(pass)}>Copy</button>

        <div>
          <input type="range"  
            min={5}
            max={20}
            value={length}
            onChange={(e) =>{
              setLength(e.target.value)
            }}
          />
          <label > length : {length}</label>
        </div>
        
      </div>
    </>
  )
}

export default App
