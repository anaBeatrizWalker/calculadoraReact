import React, { Component } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'
import './Calculator.css'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null, //armazena a operação
    values: [0, 0], //array com valor 1 e valor 2
    current: 0 //valor atual, indice 0 ou 1
}

export default class Calculator extends Component{

    state = {...initialState} //clone do objeto relacionado a state

    constructor(props){
        super()
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory(){
        this.setState({...initialState})
    }

    setOperation(operation){

    }

    addDigit(n){
        //Se foi digitado um ponto e já tinha um ponto incluso no display
        if(n === '.' && this.state.displayValue.includes('.')){
            return //ignora
        }
        
        //Limpar o display quando o número for 0 ou quando clearDisplay for true
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        //Valor atual
        const currentValue = clearDisplay ? '' : this.state.displayValue

        //Quando um número for colocado no display ele é o valor atual
        const displayValue = currentValue + n

        this.setState({displayValue, clearDisplay:false})

        if(n !== '.'){
            const i = this.state.current //pega o indice do valor (0)
            const newValue = parseFloat(displayValue)//converte
            const values = [...this.state.values] //pega o valor
            values[i] = newValue //coloca o valor no indice atual
            this.setState({values})
        }
    }

    render(){
        return (
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}