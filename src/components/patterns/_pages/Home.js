import React, {Component} from 'react';
import {
    Header,
    Sidebar,
    Content,
    Toolbar,
    Algorithms
} from '../patterns'

import items from '../../../config/sidebar/schema'


class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showSidebar: false,
            nodeRef: null,
            active: 0,
            body: [],
        }

        this.showSidebarNow = this.showSidebarNow.bind(this)
        this.hideSidebarNow = this.hideSidebarNow.bind(this)
        this.setNodeRef = this.setNodeRef.bind(this);
        this.sidebarToggle = this.sidebarToggle.bind(this)
    }

    setNodeRef() {
        this.setState({nodeRef: React.createRef()})
    }

    showSidebarNow(container, brand, toggler, toggleOpen, toggleClose) {

        let openBars = toggleOpen.childNodes
        let closeBars = toggleClose.childNodes

        this.setState({showSidebar: true})
        toggler.setAttribute('aria-selected', 'true')
        toggleOpen.style.zIndex = 222
        toggleClose.style.zIndex = 333
        brand.style.visibility = 'hidden'
        brand.style.transitionProperty = 'visibility'
        brand.style.transitionDuration = 0.5
        container.classList.add('app-sidebar-show')
        openBars.forEach(value => {
            if (!value.classList.contains('sbtoggler-move-in')) {
                value.classList.add('sbtoggler-move-out')
            } else {
                value.classList.remove('sbtoggler-move-in')
                value.classList.add('sbtoggler-move-out')
            }
        })
        closeBars.forEach(value => {
            if (!value.classList.contains('sbtoggler-move-out')) {
                value.classList.add('sbtoggler-move-in')
            } else {
                value.classList.remove('sbtoggler-move-out')
                value.classList.add('sbtoggler-move-in')
            }
        })
    }

    hideSidebarNow(container, brand, toggler, toggleOpen, toggleClose) {
        let openBars = toggleOpen.childNodes
        let closeBars = toggleClose.childNodes

        this.setState({showSidebar: false})
        toggler.setAttribute('aria-selected', 'false')
        toggleClose.style.zIndex = 222
        toggleOpen.style.zIndex = 333
        brand.style.visibility = 'visible'
        brand.style.transitionProperty = 'visibility'
        brand.style.transitionDuration = 0.5
        container.classList.remove('app-sidebar-show')
        closeBars.forEach(value => {
            if (!value.classList.contains('sbtoggler-move-in')) {
                value.classList.add('sbtoggler-move-out')
            } else {
                value.classList.remove('sbtoggler-move-in')
                value.classList.add('sbtoggler-move-out')
            }
        })
        openBars.forEach(value => {
            if (!value.classList.contains('sbtoggler-move-out')) {
                value.classList.add('sbtoggler-move-in')
            } else {
                value.classList.remove('sbtoggler-move-out')
                value.classList.add('sbtoggler-move-in')
            }
        })
    }

    sidebarToggle(event) {

        const sidebarToggler = document.querySelector('.navbar-section-toggler')
        const sidebarBrand = document.querySelector('.navbar-section-brand')
        const sidebarOpen = document.querySelector('.sidebar-open')
        const sidebarClose = document.querySelector('.sidebar-close')
        const home = document.querySelector('.app-home')

        if (this.state.nodeRef.current.contains(event.target)
            && (event.target.parentNode.parentNode.classList.contains('navbar-section-toggler')
                || event.target.parentNode.classList.contains('navbar-section-toggler')
                || event.target.classList.contains('navbar-section-toggler')
            )
        ) {
            if (!this.state.showSidebar) {
                this.showSidebarNow(home, sidebarBrand, sidebarToggler, sidebarOpen, sidebarClose)
            } else {
                this.hideSidebarNow(home, sidebarBrand, sidebarToggler, sidebarOpen, sidebarClose)
            }
        } else {

            const sidebar = document.querySelector('aside.app-sidebar')
            const header = document.querySelector('header.app-header')
            // const any = document.querySelector(event.target.classList.length > 0 ? '.' + event.target.classList.value : event.target.tagName.toLowerCase())

            // console.log(event.target)
            // console.log(event.target.classList.length > 0)
            // console.log(event.target.classList.value)
            // console.log(sidebar.contains(event.target))

            if (!sidebar.contains(event.target) && !header.contains(event.target)) {
                if (this.state.showSidebar) {
                    this.hideSidebarNow(home, sidebarBrand, sidebarToggler, sidebarOpen, sidebarClose)
                }
            }
        }
    }

    componentWillMount() {
        document.addEventListener('click', this.sidebarToggle, false)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.sidebarToggle, false)
    }

    componentDidMount() {
        // setInterval(() => {
        //     document.querySelector('.app-in').classList.add('hide')
        // }, 1501)
        this.setNodeRef()
        this.setState({body: [<Algorithms/>,]})
        // console.log(this.state)
    }

    render() {

        let {showSidebar, nodeRef, active, body} = this.state

        return (
            <div className={'app-home'} ref={nodeRef}>
                {/*<ul>*/}
                    {/*<li><Link to="/">Home</Link></li>*/}
                    {/*<li><Link to="/algorithms/all">Algorithms All</Link></li>*/}
                    {/*<li><Link to="/algorithms/classic">Algorithms Classic</Link></li>*/}
                    {/*<li><Link to="/algorithms/modern">Algorithms Modern</Link></li>*/}
                {/*</ul>*/}
                {/*<Route path={'/algorithms/:id'} component={Algorithms}/>*/}

                <Sidebar items={items} />
                <Header showTooltip={showSidebar}/>
                <Content items={items}/>
                {/*<Toolbar/>*/}
                {/*<div className={'app-in app-in-open'}/>*/}
            </div>
        );
    }
}

export default Home;