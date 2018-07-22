import React from "react";
import ConwayTable from "./ConwayTable/ConwayTable";

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

export default class WayOfLife extends React.Component {
  render() { return <ConwayTable cells={exampleCells()} />; }
}
