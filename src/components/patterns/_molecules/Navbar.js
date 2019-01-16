import React, {Component} from 'react';
// import PropTypes from "prop-types";
import {ArrowTooltip} from "../patterns";
import {Link} from "react-router-dom";
import {brand as Brand} from "../../../assets/js/img";

// const propTypes = {
//     showTooltip: PropTypes.boolean,
// };

class Navbar extends Component {

    render() {
        let {showTooltip} = this.props

        return (
            <nav className={'navbar navbar-expand-lg navbar-dark navbar-sticky'}>
                <ArrowTooltip showTooltip={showTooltip}>
                    <div className={'navbar-section-toggler'}
                         aria-selected={'false'}>
                                <span className={'sidebar-open'}>
                                    <i className={'sidebar-open-bar top'}/>
                                    <i className={'sidebar-open-bar middle'}/>
                                    <i className={'sidebar-open-bar bottom'}/>
                                </span>
                        <span className={'sidebar-close'}>
                                    <i className={'sidebar-close-bar left'}/>
                                    <i className={'sidebar-close-bar right'}/>
                                </span>
                    </div>
                </ArrowTooltip>
                <div className={'navbar-section-brand'}>
                    <Link className="navbar-brand" to={'/'}>
                        <img src={Brand} width="90" height="42" alt="brand logo"/>
                    </Link>
                </div>
            </nav>
        );
    }
}

// Navbar.propTypes = propTypes
export default Navbar;