import React from "react";
import Table from "./components/Table";

/* eslint-disable max-len */
function exampleCells() {
  return [
    [{ isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }],
    [{ isAlive: true }, { isAlive: false }, { isAlive: true }, { isAlive: true }, { isAlive: false }, { isAlive: true }, { isAlive: true }, { isAlive: false }, { isAlive: true }],
    [{ isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }],
    [{ isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }],
    [{ isAlive: true }, { isAlive: false }, { isAlive: true }, { isAlive: true }, { isAlive: false }, { isAlive: true }, { isAlive: true }, { isAlive: false }, { isAlive: true }],
    [{ isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }],
    [{ isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }],
    [{ isAlive: true }, { isAlive: false }, { isAlive: true }, { isAlive: true }, { isAlive: false }, { isAlive: true }, { isAlive: true }, { isAlive: false }, { isAlive: true }],
    [{ isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }, { isAlive: true }],
  ];
}
/* eslint-enable max-len */

const App = () => <Table cells={exampleCells()} />;
export default App;
