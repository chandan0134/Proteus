import "./App.css";
import Login from "./pages/login";
import Signup from "./pages/signup";
import KeyPage from "./pages/keys";
import Profile from "./pages/profile";
import Transaction from "./pages/transaction";

import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import KeyState from "./context/keys/KeyState";

function App() {
  return (
    <>
    <KeyState>
      <BrowserRouter>
      <Routes>
      <Route exact path='/login' Component={Login}/>
      <Route exact path='/signup' Component={Signup} />
      <Route exact path='/keys' Component={KeyPage} />
      <Route exact path='/profile' Component={Profile} />
      <Route exact path='/transaction' Component={Transaction} />
       {/* <Route exact path='/keys2' Component={KeyPage2} /> */}
      </Routes>
    </BrowserRouter>
     
    </KeyState>
    </>
  );
}

export default App;
