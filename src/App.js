import React, { useState } from 'react'
import './App.css';
import { UseFetch } from './components/UseFetch'
import { AllCards } from './components/cards/AllCards'
import { Navbar } from './components/Navbar'
function App() {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const estado = UseFetch(url)
  const { cargando, data } = estado
  return (
    <div>
      <Navbar></Navbar>
      {
        cargando
          ?
          <center>
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </center>
          :
          <body className="background-main">
            <div>
              <AllCards results={data.results} />
              <div className='container m-auto'>
                <center>
                  <button onClick={() => setUrl(data.previous)} className='button-54' id='previous'>Anterior</button>
                  <button onClick={() => setUrl(data.next)} className='button-54'>Siguiente</button>
                </center>
              </div>
            </div>
          </body>
      }
    </div>
  );
}
export default App;
