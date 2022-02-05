import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';


function App() {

  const [input, setInput] = useState('')

  function handleSearch() {
    alert("Clicou " + input)
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

    <main className="main">
      <h2>CEP: 03977-415</h2>

      <span>Rua teste algum</span>
      <span>Complemento: Algum lugar</span>
      <span>Vila Maria</span>
      <span>Campo Grande - SP</span>

    </main>


    </div>
  );
}

export default App;
