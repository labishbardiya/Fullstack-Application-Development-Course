import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  // const [count, setCount] = useState(0)

  // var a = 10;
  // var c = 13;
  var count = 0;

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <button onClick={()=>{
        console.log(count);
        count = count + 1;
      }}>Click</button>

    </>
  )

  // function Child() {
  //   var b = 11;
  //   return (
  //     <h1>Hello, World!</h1>
  //   )
  // }


}

// export default App
