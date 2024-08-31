import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import React from "react";
import RouterConfig from "../../routes/routerConfig";

function App() {
  return (
    <Container>
      <Navi />
      <RouterConfig />
    </Container>
  );
}

export default App;
