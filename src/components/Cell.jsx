import React from "react";
import { bool } from "prop-types";


// eslint-disable-next-line react/prefer-stateless-function
export default class Cell extends React.Component {
  render() {
    if (this.props.isAlive) {
      return <td>X</td>;
    }

    return <td>O</td>;
  }
}

Cell.propTypes = {
  isAlive: bool,
};

Cell.defaultProps = {
  isAlive: false,
};

