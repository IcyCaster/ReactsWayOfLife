import { arrayOf, shape, bool } from "prop-types";
import React from "react";
import Row from "./Row";


export default class ConwayTable extends React.Component {
  render() {
    const rows = this.props.cells.map((row, key) => <Row key={key} row={row} />);
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

ConwayTable.propTypes = {
  cells:
    arrayOf(arrayOf(shape({
      isAlive: bool.isRequired,
    }))),
};

ConwayTable.defaultProps = {
  cells: [],
};
