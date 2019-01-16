import React, {Component} from 'react';
// import PropTypes from "prop-types";

// const propTypes = {
//     key: PropTypes.number,
// };

class ListItem extends Component {

    render() {
        let{
            key,
            className,
            ...attr
        } = this.props

        return(
            <li className={className} key={key} {...attr}>
            </li>
        )
    }
}

// ListItem.propTypes = propTypes
export default ListItem;