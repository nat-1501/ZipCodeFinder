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

    </div>
  );
}

export default App;
