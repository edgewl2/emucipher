import React, {Component} from 'react';
import {Route, Switch,} from "react-router";
import PropTypes from 'prop-types'
import {Algorithms} from '../patterns'


const propTypes = {
    items: PropTypes.array.isRequired,
};

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initContent: true,
            numberSlash: 0,
            routes: [
                '/algorithms/:id',
                '/algorithms/:id/:key',
                '/algorithms/:id/:key/:inFto',
            ]
        }

        this.getNumberSlashRoute = this.getNumberSlashRoute.bind(this)
        this.withoutClickLinks = this.withoutClickLinks.bind(this)
    }

    getNumberSlashRoute() {
        let nSlash = window.location.hash.split('').map((char, i) => {
            if (char === '/') return i
        }).filter(Boolean).length
        this.setState({numberSlash: nSlash})
        // console.log(window.location.hash)
        // console.log(nSlash)
    }

    withoutClickLinks(event) {
        const navs = document.querySelectorAll('.sidebar-nav')
        const sidebarHeader = document.querySelector('.sidebar-header')
        const navbarBrand = document.querySelector('.navbar-section-brand')
        let sidebarNav = null

        navs.forEach((nav) => {
            if (nav.contains(event.target)) sidebarNav = Object.assign(nav)
        })
        this.getNumberSlashRoute()

        if (this.state.initContent) {
            if(sidebarNav !== null){
                if (sidebarNav.contains(event.target)) {
                    this.setState({initContent: false})
                }
            }
        } else {
            if (navbarBrand.contains(event.target) || sidebarHeader.contains(event.target)) {
                this.setState({initContent: true})
            }
        }
    }


    componentDidMount() {
        document.addEventListener('click', this.withoutClickLinks, false)
    }

    render() {
        // console.clear()

        let {items} = this.props;
        let {initContent, numberSlash, routes} = this.state

        // console.log(routes[numberSlash-1])

        return (
            <main className={'app-main'}>
                <div className="container-fluid">
                    <div className={'row'}>
                        <div className={'col-12 text-center'}>
                            {/*<Route path={'/algorithms/:id'} component={Algorithms}/>*/}
                            {/*<Route path={'/algorithms/:id/:key'} component={Algorithms}/>*/}
                            {/*<Route path={'/algorithms/:id/:key/:inFto'} component={Algorithms}/>*/}
                            <Route path={`${initContent ? '/' : routes[numberSlash - 2]}`} component={Algorithms}/>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

Content.propTypes = propTypes
export default Content;