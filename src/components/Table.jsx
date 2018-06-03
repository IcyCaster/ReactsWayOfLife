import { arrayOf, shape, bool } from "prop-types";
import React from "react";
import Row from "./Row";


export default class Table extends React.Component {
  render() {
    const testcells = () => [
      [{ isAlive: true }, { isAlive: true }, { isAlive: true }],
      [{ isAlive: true }, { isAlive: true }, { isAlive: true }],
      [{ isAlive: true }, { isAlive: true }, { isAlive: true }],
    ];

    return (
      <table>
        <tbody>
          <Row />
          <Row />
          <Row />
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  cells:
        arrayOf(arrayOf(shape({
          isAlive: bool.isRequired,
        }))),
};

Table.defaultProps = {
  cells: [],
};
