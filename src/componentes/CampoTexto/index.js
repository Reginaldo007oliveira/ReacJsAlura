import './CampoTexto.css'
import {useState} from 'react';
const CampoTexto = (props) => {
     // Outra forma de escrever o código com o template string
    console.log(props.label)

    const [valor,setValor] = useState('');

  

    const aoDigitar = (evento) => {
        //  console.log(evento.target.value)
        setValor(evento.target.value)
        console.log(valor)
    }
   
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={  `${props.placeholder}...` } />
        </div>
    );
};





export default CampoTexto;
