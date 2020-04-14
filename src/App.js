import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataWanderlink from './components/DataWanderlink'
// import ButtonSuccess from './components/ButtonSuccess';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import TodoApp from "./components/TodoApp";
function App() {
  return (
    <Router>
      <NavBar />
      <Container>
        <Switch>
          <Route path="/todoapp" >
            <TodoApp />
          </Route>
          <Route path="/data_wonderlink">
            <DataWanderlink/>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
