import EscolherAssento from './components/EscolherAssento'
import Cineflex from './components/Cineflex'
import EscolherFilme from "./components/EscolherFilme"
import Sucesso from "./components/Sucesso"
import EscolherSessao from "./components/EscolherSessao"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './reset.css'

export default function App() {

  return (
    <BrowserRouter>
      <Cineflex/>

      <Routes>
        <Route path="/" element={<EscolherFilme />}/>
        <Route path="/sessoes/:idFilme" element={<EscolherSessao />}/>
        <Route path="/assentos/:idSessao" element={<EscolherAssento />}/>
        <Route path="/Sucesso" element={<Sucesso />}/>
      </Routes>

    </BrowserRouter>
  )
}
