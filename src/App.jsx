import React, { useState } from "react";
import "./styles/main.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GamesList from "./pages/Play/GamesList";
import NavBar from "./components/NavBar";
import Game from "./pages/Play/Game";
import PNF from "./pages/PNF";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [jwt, setJwt] = useState(null);

  return (
    <>
      <div className="font-mono min-h-screen max-h-full overflow-y-scroll text-gray-100 bg-gradient-to-b from-dark to-darker">
        <NavBar loggedIn={loggedIn} />
        <Switch>
          <Route
            path="/"
            component={() => (
              <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            )}
            exact
          />
          <Route
            path="/login"
            component={() => (
              <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} jwt={jwt} setJwt={setJwt} />
            )}
          />
          <Route path="/signup" component={Signup} />
          <Route
            path="/games"
            component={() =>
              loggedIn ? <GamesList /> : <Redirect to="/login" />
            }
            exact
          />
          <Route
            path="/games/:name"
            component={() => (loggedIn ? <Game /> : <Redirect to="/login" />)}
          />
          <Route component={PNF} />
        </Switch>
      </div>
    </>
  );
}

export default App;
