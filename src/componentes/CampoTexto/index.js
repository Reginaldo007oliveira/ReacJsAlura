import './CampoTexto.css'

const CampoTexto = (props) => {
     // Outra forma de escrever o código com o template string
    console.log(props.label)
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={  `${props.placeholder}...` } />
        </div>
    );
};





export default CampoTexto;
