import { useEffect, useState } from "react"
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function EscolherFilme() {
    const [filmes, setFilmes] = useState(null);

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then(res => setFilmes(res.data))
            .catch(err => console.log(err.response.data));
    }, [])

    if (filmes === null){
        return <Carregando>Carregando...</Carregando>
    }

    return(
        <>
            <Wrapper>
                <Titulo>Em cartaz</Titulo>
                <Filmes>
                    {filmes.map(filme => (
                        <Filme key={filme.id} to={`/sessoes/${filme.id}`}>
                            <img src={filme.posterURL} />
                        </Filme>
                    ))}
                </Filmes>
            </Wrapper>
        </>
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
const Filmes = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px 26px;
    a {
      width: 100%;
      max-width: 145px;
    }
`

const Filme = styled(Link)`
    width: 100%;
    max-width: 145px;
    height: 210px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, .2);
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover img {
        filter: brightness(50%);
    }
`

