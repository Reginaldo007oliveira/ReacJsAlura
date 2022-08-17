import ListaSuspensa from "../../ListaSuspensa";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import './Formulario.css'

const Formulario = () => {
    const time = [
        'Programação',
        'Front-end',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e gestão'
    ]
    
    const aoEnviar = (evento) => {
        evento.preventDefault()
        console.log('Form enviado')
    }
    
  return (
    <section className="formulario">
      <form onSubmit={aoEnviar}>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto obrigatorio={false}  label="Imagem" placeholder="carregue uma i" />
        <ListaSuspensa required={true} label="Time" itens={time}/>
        {/* <Botao texto="Criar Card" /> */}
        <Botao>
            criar card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
