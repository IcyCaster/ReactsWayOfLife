import React from "react";
import { bool } from "prop-types";


// eslint-disable-next-line react/prefer-stateless-function
export default class Cell extends React.Component {
  aliveCell = () => <td>X</td>;
  deadCell = () => <td>X</td>;

  render() {
    const x = this.props.isAlive ? this.aliveCell : this.deadCell;
    return { x };
  }
}

Cell.propTypes = {
  isAlive: bool,
};

Cell.defaultProps = {
  isAlive: false,
};

