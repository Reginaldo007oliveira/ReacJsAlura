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
  return (
    <section className="formulario">
      <form>
        <CampoTexto label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeholder="carregue uma i" />
        <ListaSuspensa label="Time" itens={time}/>
        {/* <Botao texto="Criar Card" /> */}
        <Botao>
            criar card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
