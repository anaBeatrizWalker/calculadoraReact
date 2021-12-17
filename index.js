import React from "react";
import { ReactDOM } from "react";
import './index.css'
import Calculator from "./src/main/Calculator";
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator/>
    </div>, 
    document.getElementById('root'))
registerServiceWorker()