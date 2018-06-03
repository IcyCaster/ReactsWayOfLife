import React from "react";
import Cell from "./Cell";


export default class Row extends React.Component {
  render() {
    return (
      <tr>
        <Cell />
        <Cell />
        <Cell />
      </tr>
    );
  }
}

