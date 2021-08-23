import React from 'react';

export default class AppCard extends React.Component{
    constructor(props){
        super(props)
        this.data = [props]
    }
    render(){
        console.log(this.props.nameCity.name, 'in app-card')
        if(this.props.nameCity.name != null ){
            return(<span className='cityInfoCard'>Hi, you!
                    <br/>City: {this.props.nameCity.name}. 
                    <br/>Temperature: {Math.floor(this.props.nameCity.temp - 273)}°C. 
                    <br/>Clouds: {this.props.nameCity.clouds}%. 
                    <br/>Have a good day!
                </span> )
        }else {
            return(
            <div className="cityInfoCard">
            Please write city:)
            </div>)
                
        }
            
    }
}
