import React from "react";
import Row from "./Row";
import PropTypes from 'prop-types';


export default class Table extends React.Component {



    createRows = () => {

    };

    render() {
        return (
            <table>
                <tbody>
                <Row/>
                <Row/>
                <Row/>
                </tbody>
            </table>
        )
    }

}

Table.propTypes = {
    cells:
        PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.shape({
                    isAlive: PropTypes.bool.isRequired,
                })
            )
        ),
};

Table.defaultProps = {
    aliveCells: [],
};
