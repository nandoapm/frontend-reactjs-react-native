import React from 'react';
import './global.css';
import Routes from './routes';


function App() {
  return (
    <Routes />
  )
}

export default App;


/* //jsx (javascript e xml) é html intregado no js
//componente no react é uma função que retorna html

function App() {
  //let counter = useState(0);
  // useState retorna um array [valor, funçãoDeAtualizaçãoDoValor]
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
    //counter += 1; // counter ++
    //console.log(counter)
  }

  return (
    <div>
      <Header> Contador: {counter} </Header>
      <button onClick={increment}> Incrementar </button>
    </div>
    
  )
}

export default App;

//Propriedades / atributos = props
//Estado = state 
 */