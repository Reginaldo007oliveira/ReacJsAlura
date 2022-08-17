import './CampoTexto.css'

const CampoTexto = (props) => {
     // o placeholder pode ser podificado usando o template string
    const placeholderModificado = `${props.placeholder}...` 
    console.log(props.label)
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModificado} />
        </div>
    );
};





export default CampoTexto;
