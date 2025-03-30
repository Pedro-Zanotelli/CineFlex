import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

export default function Sucesso() {
    const { state } = useLocation();
    const { nome, cpf, numerosAssentos, filme, data, horario, } = state;

    console.log("Dados recebidos:", state);

    if (!state) return <Carregando>Carregando...</Carregando>;

    return(
        <div>
            <Wrapper>
                <Titulo>Pedido finalizado!</Titulo>
                <DadosReservados>
                    <Container>
                        <SubTitulo>Filme e sessão</SubTitulo>
                        <Informacoes>
                            <span>{filme}</span> 
                            <span>{data} às {horario}</span>
                        </Informacoes>
                    </Container>    
                    <Container>
                        <SubTitulo>Ingressos</SubTitulo>
                        <Informacoes>
                            {numerosAssentos.map((numeroAssento, i) => (
                                <span key={i}>
                                    Assento {numeroAssento}
                                    <br />
                                </span>
                            ))}
                        </Informacoes>
                    </Container> 
                    <Container>  
                        <SubTitulo>Comprador(a)</SubTitulo>
                        <Informacoes>
                            <span>Nome: {nome}</span>
                            <span>CPF: {cpf}</span>
                        </Informacoes>
                    </Container>     
                </DadosReservados>
                <Voltar to={`/`}>
                    <button>Voltar para tela a inicial</button>
                </Voltar>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    width: 100%;
    margin-top: 67px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Container = styled.div`
    width: auto;
`
const Carregando = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: white;
    font-family: "sarala", serif;
`
const Titulo = styled.div`
    height: 78px;
    width: 375px;
    display: flex;
    font-size: 24px;
    font-family: "sarala", serif;
    font-weight: 400;
    align-items: center;
    justify-content: center;
    color: #9DB899;
`
const DadosReservados = styled.div`
    display: flex;
    width: 338px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2B2D36;
    border-radius: 8px;
`
const SubTitulo = styled.div`
    font-family: "sarala", serif;
    color: #EE897F;
    font-weight: 700;
    size: 22px;
    width: 302px;
    height: 30px;
    margin-top: 9px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #4E5A65;
`
const Informacoes = styled.div`
    margin-top: 14px;
    width: 100%;
    display: flex;
    flex-direction: column;

    color: white;
    font-family: "sarala", serif;
    size: 20px;

    span{
        margin-bottom: 15px;
    }
`
const Voltar = styled(Link)`
  button{
    width: 338px;
    padding: 10px;
    margin-top: 38px;
    background-color: #EE897F;
    color: #2B2D36;
    text-align: center;
    font-family: "sarala", serif;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none; /* Remove a sublinhado do link */
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`