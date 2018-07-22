import React from "react";
import ConwayTable from "./components/ConwayTable/ConwayTable";

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

const App = () => <ConwayTable cells={exampleCells()} />;
export default App;
