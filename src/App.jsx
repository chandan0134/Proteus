import "./App.css";
import Login from "./pages/login";
import Signup from "./pages/signup";
import KeyPage from "./pages/keys";
import KeyPage2 from "../page/keys2";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route exact path='/login' Component={Login}/>
      <Route exact path='/signup' Component={Signup} />
      <Route exact path='/keys' Component={KeyPage} />

       <Route exact path='/keys2' Component={KeyPage2} />
      </Routes>
    </BrowserRouter>
      {/* <> */}
        {/* <Router> */}
          {/* <Route component={Application} path="/">
          <IndexRoute component={HomeSection} />
          <Route component={HomeSection} path="home" />
          <Route component={TodoSection} path="todo" />
          <Route component={Contact} path="contact" />
          <Route component={Login} exact path="login" />
          <Route component={Signup} exact path="signup" />
          <Route component={NotFoundSection} path="*" />
          </Route>
        </Router>
      </> */}
    </>
  );
}

export default App;
