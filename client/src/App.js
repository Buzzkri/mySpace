import React from 'react';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Register from "./components/Register"
import { Route, Switch, } from "react-router-dom"
import { Container } from "semantic-ui-react";
import NoMatch from "./components/NoMatch";
import FetchUser from "./components/FetchUser";

const App = () => (
<> 
<Navbar />
  <FetchUser>
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route component={NoMatch} />
    </Switch>
  </Container>
  </FetchUser>
</>
);

export default App;
