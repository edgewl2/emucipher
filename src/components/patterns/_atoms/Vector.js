//Dependences
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//New Properties
const propTypes = {
    numbers: PropTypes.number,
    position: PropTypes.string.isRequired,
};

class Vector extends Component {
    render() {

        let {
            position,
            numbers,
            ...attr
        } = this.props;

        //Class CSS curve
        const classes = numbers != null ? 'vector-' + position + numbers : 'vector-' + position;

        return (
            <div {...attr} className={classes}/>
        );
    }
}

//setProperties
Vector.propsTypes = propTypes;

export default Vector;