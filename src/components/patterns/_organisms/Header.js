import React, {Component} from 'react';
import {Navbar} from '../patterns'

class Header extends Component {

    render() {
        let {showTooltip} = this.props.showTooltip

        return (
            <header className={'app-header container-fluid'}>
                <div className="row">
                    <Navbar showTooltip={showTooltip}/>
                </div>
            </header>
        );
    }
}

export default Header;