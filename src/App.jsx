import React, { useState } from "react";
import "./styles/main.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Play from "./pages/Play/Play";
import NavBar from "./components/NavBar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div className="font-mono h-screen text-gray-100 bg-gradient-to-b from-dark to-darker">
        <NavBar />
        <Switch>
          <Route
            path="/"
            component={() => (
              <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            )}
            exact
          />
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup} />
          <Route path="/play">
            {loggedIn ? <Play /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
