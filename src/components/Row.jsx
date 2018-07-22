import { arrayOf, shape, bool } from "prop-types";
import React from "react";
import Cell from "./Cell/Cell";

export default class Row extends React.Component {
  render() {
    const cells = this.props.row.map((cell, key) => <Cell key={key} isAlive={cell.isAlive} />);
    return (
      <tr>
        {cells}
      </tr>
    );
  }
}

Row.propTypes = {
  row: arrayOf(shape({
    isAlive: bool.isRequired,
  })),
};

Row.defaultProps = {
  row: [],
};

