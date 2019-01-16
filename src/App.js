//Dependences
import React, {Component} from 'react';
import PropTypes from 'prop-types'
//Scripts
import 'bootstrap'
//Styles
import './assets/css/style.css'


const propTypes = {
    children: PropTypes.object.isRequired
};

class App extends Component {
    // constructor(props) {
    //     super(props)
    //     this.redirectToHome = this.redirectToHome.bind(this)
    // }
    //
    // redirectToHome() {
    //     setInterval(() => {
    //         window.location = '#/home'
    //     }, 8500)
    // }
    //
    // componentDidMount() {
    //     window.addEventListener('load', this.redirectToHome)
    // }

    render() {
        let {children} = this.props;

        return (
            <div className={'app'}>
                {children}
            </div>
        );
    }
}

App.propTypes = propTypes
export default App;