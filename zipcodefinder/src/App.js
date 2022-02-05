import './styles.css';

import {FiSearch} from 'react-icons/fi'
function App() {
  return (
    <div className="container">
      <h1 className="title">Zip Code Finder</h1>

      <div className="containerInput">
        <input type="text" placeholder="Type your CEP.."/>

        <button className="ButtonSearch">
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
