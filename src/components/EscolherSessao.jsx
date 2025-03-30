import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function EscolherSessao() {
    const [sessoes, setSessoes] = useState(null);
    const { idFilme } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then(res => setSessoes(res.data))
            .catch(err => console.log(err.response.data))
    }, [])

    if(sessoes === null) {
        return <Carregando>Carregando...</Carregando>
    }

    return(
        <>
            <Wrapper>
                <Titulo>Selecione o horário</Titulo>
                <Sessoes>
                    <Filme>
                        <Imagem><img src={sessoes.posterURL} /></Imagem>
                        <Nome>{sessoes.title}</Nome>
                    </Filme>
                    {sessoes.days.map(sessao => (
                        <Sessao key={sessao.id}>
                            <Data>{sessao.weekday}, {sessao.date}</Data>
                                <Botoes>
                                    {sessao.showtimes.map(horario => (
                                        <Horario to={`/assentos/${horario.id}`} key={horario.id}>
                                            {horario.name}
                                        </Horario>
                                    ))}
                                </Botoes>
                        </Sessao>
                    ))}
                </Sessoes>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    margin-top: 67px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    color: white;
`
const Sessoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 23px;
`
const Sessao = styled.div`
    width: 338px;
    height: auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2B2D36;
`
const Data = styled.div`
    font-family: "sarala", serif;
    color: white;
    font-weight: 400;
    size: 20px;
    width: 302px;
    height: 50px;
    margin-top: 13px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #4E5A65;
`
const Botoes = styled.div`
    margin-top: 19px;
    margin-bottom: 16px;
    width: 302px;
    display: flex;
    justify-content: space-around;
`
const Horario = styled(Link)`
    width: 84px;
    height: 41px;
    border: 2px solid #EE897F;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    color: #EE897F;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Filme = styled.div`
    width: 340px;
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    background-color: #2B2D36;
`
const Imagem = styled.div`
    margin-bottom: 10px;
    max-width: 150px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
`
const Nome = styled.div`
    font-family: "sarala", serif;
    margin: 5px;
    color: #ffffff;
    font-weight: 600;
    font-size: 25px;
    text-align: center;
`
