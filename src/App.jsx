import React from "react";
import Table from "./components/Table";

const testcells = () => [
  [{ isAlive: true }, { isAlive: true }, { isAlive: true }],
  [{ isAlive: true }, { isAlive: true }, { isAlive: true }],
  [{ isAlive: true }, { isAlive: true }, { isAlive: true }],
];

const App = () => <Table cells={testcells} />;
export default App;
