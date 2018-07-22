import React from "react";
import { bool } from "prop-types";


// eslint-disable-next-line react/prefer-stateless-function
export default class Cell extends React.Component {
  aliveCell = () => <td className="alive-cell">O</td>;
  deadCell = () => <td className="dead-cell">X</td>;

  render() {
    return this.props.isAlive ? this.aliveCell() : this.deadCell();
  }
}

Cell.propTypes = {
  isAlive: bool,
};

Cell.defaultProps = {
  isAlive: false,
};

