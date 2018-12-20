//Dependences
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//New Properties
const propTypes = {
    number: PropTypes.number,
    position: PropTypes.string.isRequired,
};

class Vector extends Component {
    render() {

        let {
            position,
            number,
            ...attributes
        } = this.props;

        //Class CSS curve
        const classes = number != null ? 'vector-' + position + number : 'vector-' + position;

        return (
            <div {...attributes} className={classes}/>
        );
    }
}

//setProperties
Vector.propsTypes = propTypes;

export default Vector;