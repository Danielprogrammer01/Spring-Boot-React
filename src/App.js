import logo from './logo.svg';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const produto = {
    codigo: 0,
    nome: "",
    marca: ""
  }
  
  const[btnCadastrar, setBtnCadastrar] = useState(true)
  const[produtos, setProdutos] = useState([])
  const[objProduto, setProduto] = useState(produto)

  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  return (
    <div>
    <p>{JSON.stringify(objProduto)}</p>

    <Formulario botao={btnCadastrar}/>
    <Tabela vetor={produtos}/>

    </div>
  );
}

export default App;
