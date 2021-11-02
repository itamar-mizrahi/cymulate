import "./App.css";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter, Route,Switch , Link } from "react-router-dom";
import React, { useState } from 'react';
function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
  <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
