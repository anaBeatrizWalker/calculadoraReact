import React from "react";
import './Button.css'

export default props => {
    <button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>

        {props.label}
    </button>

    /* OU */

    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    return (
        <button 
            className={classes}
            onClick={e =>props.click && props.click(props.label)}>
            {props.label}
        </button>
    )
    
}
/*
props.operation ? 'operation' : '' = se a propriedade operation for passada, use a classe

props.click(props.label)}: pega o conteúdo do botão clicado
*/