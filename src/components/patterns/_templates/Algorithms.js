import React, {Component} from 'react';

import items from '../../../config/algorithms/schema'

class Algorithms extends Component {
    constructor(props){
        super(props)

        this.getAlgorithms = this.getAlgorithms.bind(this)
    }

    getAlgorithms(id, key, inFto){
        items.map((item, k) => {
            if(id !== undefined  || key.isNullOrUndefined(key) || inFto.isNullOrUndefined(inFto)){
                console.log('se cumplió')
            }
        })
    }

    componentDidMount() {
        document.addEventListener('click', this.getAlgorithms, false)
    }

    render() {
        const {id, key, inFto} = this.props.match.params
        // console.log(id)

        return (
            <div className="app-algoritms">
                {/*<h1>Algorithms {id} {key} {inFto}</h1>*/}
                <div className={'content-fluid'}>
                    <div className={'row'}>

                    </div>
                </div>
            </div>
        );
    }
}

export default Algorithms;