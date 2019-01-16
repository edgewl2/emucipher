import React, { Component } from 'react';
import {Loader, Vector} from '../patterns';

class Load extends Component{
    render(){
        // let title = document.title.split(' ')[0]+' | Inicio';
        // document.title = title;
        // console.log(window.location);
        return(
            <div className={'app-splash'}>
                <Vector position={'top'}/>
                <Vector position={'top'} numbers={2}/>
                <div className="container">
                    <div className={'row'}>
                        <Loader/>
                    </div>
                </div>
                <Vector position={'bottom'}/>
                <Vector position={'bottom'} numbers={2}/>
            </div>
        );
    }
}

export default Load;