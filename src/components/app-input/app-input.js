import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
    border-radius: 6px;
    border: 2px solid black;
    background-color: #a2cefa;
    `
const Input = styled.input`
    text-align: center;
    border-radius: 6px;
    background-color: #c5e0fa;
    `

    export default class AppInput extends React.Component{

    

    render(){
        return(
            <form
            className='app-form'
            onSubmit={this.props.weatherMethood}>
                <Input
                name="city"
                type='text'
                placeholder='Are you from?'/>
                <Button 
                type='submit'
                className='btn'
                >Search</Button>
            </form>
        )
    }

}