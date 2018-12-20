//Dependences
import React, {Component} from 'react';
//Images
import {loading1, loading2} from '../../../assets/js/img'

class Loader extends Component {
    render() {
        return (
            <div className={'col-12 text-center'}>
                <div className={'loader'}>
                    <img src={loading1} className={'loader-main'} alt="loading main"/>
                    <img src={loading2} className={'loader-secondary'} alt="loading secondary"/>
                </div>
                <h1 className={'loader-name'}>Simucipher</h1>
            </div>
        );
    }
}

export default Loader;