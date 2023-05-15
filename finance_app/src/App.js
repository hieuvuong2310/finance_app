// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { useState } from 'react'
// import SignUpPage  from './components/pages/SignUpPage'
import SignInPage  from './components/pages/SignInPage'
import './App.css'
// import "node_modules/react-icons";

function App() {
  return (
    <>
    <div> 
      <SignInPage/>
    </div>
    </>
  )
}

export default App
