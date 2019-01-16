import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {List, ListItem} from '../patterns'
import logo from "../../../assets/img/logo.svg";

const propTypes = {
    items: PropTypes.array.isRequired,
};

class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.fixDropdowns = this.fixDropdowns.bind(this)
    }

    fixDropdowns(event) {
        const navs = document.querySelectorAll('.sidebar-nav')
        let currentNav = null
        let currentList = null
        let currentLink = null
        let isEqual = false
        let isContains = false

        navs.forEach((nav, i) => {
            if (nav.contains(event.target)) {
                currentNav = Object.assign(nav)
                isContains = true
            }
        })

        if (currentNav !== null) {
            currentNav.childNodes.forEach((li, i) => {
                if (li.contains(event.target)) {
                    currentList = Object.assign(li)
                    isEqual = true
                }
            })
        }

        if (currentList !== null) {
            currentList.childNodes.forEach((a, i) => {
                if (a.contains(event.target) || a.isEqualNode(event.target)) {
                    currentLink = Object.assign(a)
                }
            })
        }

        if (isContains && isEqual) {
            currentList.childNodes.forEach((child, key) => {
                if (child.classList.contains('dropdown-menu')) {
                    if (child.classList.contains('show')) {
                        child.classList.remove('show')
                        currentLink.childNodes.forEach((otherChild, othkey) => {
                            if ((otherChild !== undefined) && (otherChild.nodeType === 1)) {
                                if (otherChild.classList.contains('sidebar-dropdown-toggler')) {
                                    if (otherChild.classList.contains('sdt-moveup')) {
                                        otherChild.classList.remove('sdt-moveup')
                                        otherChild.classList.add('sdt-movedown')
                                    } else {
                                        otherChild.classList.add('sdt-movedown')
                                    }
                                }
                            }
                        })
                    } else {
                        child.classList.add('show')
                        currentLink.childNodes.forEach((otherChild, othkey) => {
                            if ((otherChild !== undefined) && (otherChild.nodeType === 1)) {
                                if (otherChild.classList.contains('sidebar-dropdown-toggler')) {
                                    if (otherChild.classList.contains('sdt-movedown')) {
                                        otherChild.classList.remove('sdt-movedown')
                                        otherChild.classList.add('sdt-moveup')
                                    } else {
                                        otherChild.classList.add('sdt-moveup')
                                    }
                                }
                            }
                        })
                    }
                }
            })
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.fixDropdowns, false)
    }

    render() {
        let {items} = this.props

        return (
            <aside className={'app-sidebar'}>
                <nav className={'sidebar navbar-dark'}>
                    <div className={'sidebar-header'}>
                        <Link className={'sidebar-brand navbar-brand'} to={'/'}>
                            <img src={logo} width="90" height="90" alt="brand logo"/>
                            <h2 className={'sidebar-brand-text'}>Simucipher</h2>
                        </Link>
                    </div>

                    <div className={'sidebar-content'}>
                        <List order={false} className={'sidebar-nav nav navbar-nav'} data-menu="main" role="navigation"
                              aria-label="Algoritmos">
                            {items.map((item, key) =>
                                <ListItem key={key}
                                          className={`sidebar-nav-item nav-item ${((item.method !== undefined) || (item.keys !== undefined)) ? 'dropdown' : ''}`}>
                                    <Link to={item.path} className={`sidebar-nav-link`} data-submenu={item.submenu}>
                                        <i className={item.icon}/> Alg. {item.title}
                                        {(item.method !== undefined) || (item.keys !== undefined) ? <span className={'sidebar-dropdown-toggler'}/> : null}
                                    </Link>
                                    {(item.method !== undefined) || (item.keys !== undefined) ?
                                        <div className={'dropdown-menu text-center'}>
                                            <List order={false} className={'sidebar-nav nav navbar-nav'}
                                                  data-menu={item.submenu} role="navigation" aria-label={item.title}>
                                                {(item.method !== undefined) ? item.method.map((subitem, skey) =>
                                                    <ListItem key={skey}
                                                              className={`sidebar-nav-item nav-item ${(subitem.inFunctionTo !== undefined) ? 'dropdown' : ''}`}>
                                                        <Link to={subitem.path} className={`sidebar-nav-link`}
                                                              data-submenu={subitem.submenu}>
                                                            <i className={subitem.icon}/> {subitem.title}
                                                            {(subitem.inFunctionTo !== undefined) ? <span className={'sidebar-dropdown-toggler'}/> : null}
                                                        </Link>
                                                        {(subitem.inFunctionTo !== undefined) ?
                                                            <div className={'dropdown-menu text-center'}>
                                                                <List order={false}
                                                                      className={'sidebar-nav nav navbar-nav'}
                                                                      data-menu={subitem.submenu}
                                                                      role="navigation" aria-label={subitem.title}>
                                                                    {(subitem.inFunctionTo !== undefined) ? subitem.inFunctionTo.map((subsubitem, sskey) =>
                                                                        <ListItem key={sskey}
                                                                                  className={`sidebar-nav-item nav-item`}>
                                                                            <Link to={subsubitem.path}
                                                                                  className={`sidebar-nav-link`}>
                                                                                <i className={subsubitem.icon}/> {subsubitem.title}
                                                                            </Link>
                                                                        </ListItem>
                                                                    ) : null}
                                                                </List>
                                                            </div>
                                                            : null}
                                                    </ListItem>
                                                ) : null}
                                                {(item.keys !== undefined) ? item.keys.map((subitem, skey) =>
                                                    <ListItem key={skey}
                                                              className={`sidebar-nav-item nav-item ${(subitem.inFunctionTo !== undefined) ? 'dropdown' : ''}`}>
                                                        <Link to={subitem.path} className={`sidebar-nav-link`}
                                                              data-submenu={subitem.submenu}>
                                                            <i className={subitem.icon}/> {subitem.title}
                                                            {(subitem.inFunctionTo !== undefined) ? <span className={'sidebar-dropdown-toggler'}/> : null}
                                                        </Link>
                                                        {(subitem.inFunctionTo !== undefined) ?
                                                            <div className={'dropdown-menu text-center'}>
                                                                <List order={false}
                                                                      className={'sidebar-nav nav navbar-nav'}
                                                                      data-menu={subitem.submenu}
                                                                      role="navigation" aria-label={subitem.title}>
                                                                    {(subitem.inFunctionTo !== undefined) ? subitem.inFunctionTo.map((subsubitem, sskey) =>
                                                                        <ListItem key={sskey}
                                                                                  className={`sidebar-nav-item nav-item`}>
                                                                            <Link to={subsubitem.path}
                                                                                  className={`sidebar-nav-link`}>
                                                                                <i className={subsubitem.icon}/> {subsubitem.title}
                                                                            </Link>
                                                                        </ListItem>
                                                                    ) : null}
                                                                </List>
                                                            </div>
                                                            : null}
                                                    </ListItem>
                                                ) : null}
                                            </List>
                                        </div>
                                        : null}
                                </ListItem>
                            )}
                        </List>

                    </div>
                </nav>
            </aside>
        );
    }
}

Sidebar.propTypes = propTypes
export default Sidebar;