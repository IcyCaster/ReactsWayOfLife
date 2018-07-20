import React from "react";
import Cell from "./Cell/Cell";

export default class Row extends React.Component {
  render() {
    return (
      <tr>
        <Cell isAlive />
        <Cell isAlive={false} />
        <Cell isAlive />
      </tr>
    );
  }
}

