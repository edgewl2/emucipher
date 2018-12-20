import React, { Component } from 'react';

class Home extends Component{
    render(){
        let title = document.title.split(' ')[0]+' | Inicio';
        document.title = title;
        // console.log(window.location);
        return(
            <h1>Inicio</h1>
        );
    }
}

export default Home;