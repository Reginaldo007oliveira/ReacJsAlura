
import './App.css';
import Banner from './componentes/Banner';


import CampoTexto from './componentes/CampoTexto/';

function App() {
 
  return (
  
    <div className="App">
        <Banner/>
      <CampoTexto  label="Nome" placeholder='Digite o seu nome'/>
      <CampoTexto  label="Cargo" placeholder='Digite o seu cargo'/>
      <CampoTexto  label="Imagem"  placeholder='carregue uma i'/>
    
        <p>
        Dev Reginaldo Oliveira
        </p>
    </div>
  );
}

export default App;
