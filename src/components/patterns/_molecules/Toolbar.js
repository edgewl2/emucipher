import React, {Component} from 'react';

// import { Link } from 'react-router-dom'

class Toolbar extends Component {
    render() {
        // let title = document.title.split(' ')[0]+' | Inicio';
        // document.title = title;
        // console.log(window.location);
        return (
            <aside className={'app-toolbar'}>
                <nav className="toolbar navbar-dark">
                    <div className={'container'}>
                        <ul data-menu="main" className="toolbar-tools nav navbar-nav" tabIndex="-1" role="menu" aria-label="Algoritmos">
                            <li className="toolbar-tools-item nav-item" role="menuitem">
                                <a className="toolbar-tools-link" data-submenu="secondaryOne" aria-owns="secondaryOne"
                                   href="#"><i className={'fas fa-user-lock'}/></a>
                            </li>
                            <li className="toolbar-tools-item nav-item" role="menuitem">
                                <a className="toolbar-tools-link" data-submenu="secondaryOne" aria-owns="secondaryOne"
                                   href="#"><i className={'fas fa-user-lock'}/></a>
                            </li>
                        </ul>
                    </div>


                    {/*<ul data-menu="secondary-one" className="sidebar-tools" tabIndex="-1" role="menu" aria-label="Tratamiento">*/}
                        {/*<li className="sidebar-tools-item" role="menuitem">*/}
                            {/*<a className="sidebar-tools-link" data-submenu="secondary" aria-owns="secondary"*/}
                               {/*href="#">Clásicos</a>*/}
                        {/*</li>*/}
                        {/*<li className="sidebar-tools-item" role="menuitem">*/}
                            {/*<a className="sidebar-tools-link" data-submenu="submenu-2" aria-owns="submenu-2"*/}
                               {/*href="#">Modernos</a>*/}
                        {/*</li>*/}
                    {/*</ul>*/}

                    {/*<ul data-menu="secondary-two" className="sidebar-tools" tabIndex="-1" role="menu" aria-label="Claves">*/}
                        {/*<li className="sidebar-tools-item" role="menuitem">*/}
                            {/*<a className="sidebar-tools-link" data-submenu="secondary" aria-owns="secondary"*/}
                               {/*href="#">Clásicos</a>*/}
                        {/*</li>*/}
                        {/*<li className="sidebar-tools-item" role="menuitem">*/}
                            {/*<a className="sidebar-tools-link" data-submenu="submenu-2" aria-owns="submenu-2"*/}
                               {/*href="#">Modernos</a>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                </nav>
            </aside>
        );
    }
}

export default Toolbar;