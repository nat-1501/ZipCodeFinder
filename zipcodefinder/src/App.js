import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';
import api from './services/api';
import ContentLoader, {Facebook} from 'react-content-loader';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    
    if(input === ''){
      alert("Preencha algum CEP!")
      return;
    }
    
     try{
        const response = await api.get(`${input}/json`);
        setCep(response.data)
        setInput("");

    }catch{
      alert("Ops erro ao buscar");
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Zip Code Finder</h1>

      <div className="containerInput">
        <input type="text" placeholder="Type your CEP.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="ButtonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#ffff"/>
        </button>
      </div>


    {Object.keys(cep).length > 0 && (
      <main className="main">
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
        <ContentLoader/>
      </main>
      
    )}
      
    </div>
  );
}

export default App;
