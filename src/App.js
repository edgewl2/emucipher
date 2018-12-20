//Dependences
import React, {Component} from 'react';
//Components
import {Loader, Vector} from './components/patterns/patterns';
//Styles
import './assets/css/style.css';


class App extends Component {

    // constructor(props){
    //     super(props)
    //     this.showSplashLoaderName = this.showSplashLoaderName.bind(this)
    //     // this.state = {
    //     initWidth: window.innerWidth,
    //     initHeight: window.innerHeight,
    //     oldWidth: window.innerWidth,
    //     oldHeight: window.innerHeight,
    //     marginTop: 0.0,
    // }
    // this.curve = null
    // this.style = null
    // this.getMarginCurves = this.getMarginCurves.bind(this)
    // this.updateDimensions = this.updateDimensions.bind(this)
    // }
    //
    // showSplashLoaderName(){
    //     setInterval(()=> {
    //         document.querySelector('.loader-name').classList.remove('hide')
    //     }, 4000)
    // }

    // getMarginCurves(){
    //     this.curve = document.querySelector('.curve-top')
    //     this.style = getComputedStyle(this.curve)
    //
    //     this.setState({marginTop: parseFloat(this.style.marginTop)/window.innerWidth*100})
    // }
    //
    // updateDimensions(){
    //     let newMarginTop = 0.00
    //
    //     // console.log('OLD width:'+this.state.oldWidth+', height:'+this.state.oldHeight)
    //     this.setState({width: window.innerWidth, height: window.innerHeight})
    //     // console.log('NEW width:'+this.state.width+', height:'+this.state.height)
    //     // console.log('\n')
    //
    //     // console.log('OLD marginTop:'+this.state.marginTop)
    //     // console.log(this.state.marginTop.toFixed(2))
    //
    //     if(this.state.oldWidth > this.state.width){
    //
    //         newMarginTop = parseFloat(this.state.marginTop.toFixed(2)) - 0.06
    //     }
    //     else{
    //         newMarginTop = parseFloat(this.state.marginTop.toFixed(2)) + 0.06
    //     }
    //
    //     this.setState({marginTop: parseFloat(newMarginTop.toFixed(2))})
    //     this.curve.style.marginTop = this.state.marginTop+'%'
    //
    //     // console.log('NEW marginTop:'+this.state.marginTop)
    //     // console.log('\n')
    //     // console.log('\n')
    //
    //     this.setState({oldWidth: window.innerWidth, oldHeight: window.innerHeight})
    // }

    // componentDidMount() {
    //     window.addEventListener('load', this.showSplashLoaderName)
    //     // window.addEventListener('resize', this.updateDimensions)
    // }

    render() {
        // alert(window.innerWidth.toString())

        return (
            <div className={'app'}>
                <Vector position={'top'}/>
                <Vector position={'top'} number={2}/>
                <div className="container">
                    <div className={'row'}>
                        <Loader/>
                    </div>
                </div>
                <Vector position={'bottom'}/>
                <Vector position={'bottom'} number={2}/>
            </div>
        );
    }
}

export default App;
