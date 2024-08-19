import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import React from "react";


function App() {
  return ( 
      <Container>
        <Navi/>
        <Dashboard/>
      </Container>
  );
}

export default App;
