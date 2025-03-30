import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"; // Adicione no topo

export default function EscolherAssento() {
    const [assentos, setAssentos] = useState(null)
    const { idSessao } = useParams()
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [assentosSelecionados, setAssentosSelecionados] = useState([]);
    const [numerosAssentos, setNumerosAssentos] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then(res => setAssentos(res.data))
            .catch(err => console.log(err.response.data));
    }, [idSessao])

    function selecionarAssento(id, disponivel, numeroAssento){
        if (!disponivel) {
            alert("Esse assento não está disponível");
            return
        };
        
        setAssentosSelecionados(assentosAnteriores => {
            const jaSelecionado = assentosAnteriores.includes(id);
    
            if (jaSelecionado) {
                return assentosAnteriores.filter(assentoId => assentoId !== id);
            } else {
                return [...assentosAnteriores, id];
            }
        });
        setNumerosAssentos(prev => {
            if (prev.includes(numeroAssento)) {
                return prev.filter(num => num !== numeroAssento);
            } else {
                return [...prev, numeroAssento];
            }
        });
    }

    function reservarAssentos(event) {
        event.preventDefault();
        if (assentosSelecionados.length === 0) {
            alert("Selecione pelo menos um assento");
            return
        }

        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
            ids: assentosSelecionados,
            name: name,
            cpf: cpf
        })
        .then(() => {
            navigate("/Sucesso", {
                state: {
                    nome: name,
                    cpf: cpf,
                    filme: assentos.movie.title,
                    horario: assentos.name,
                    data: assentos.day.date,
                    numerosAssentos: numerosAssentos
                }
            })
        })
        .catch(err => {
            console.error("Erro na reserva:", err.response ? err.response.data : err.message);
        });
    }


    if (assentos === null){
        return <Carregando>Carregando...</Carregando>
    }

    return(
        <div>
            <Wrapper>
                <Titulo>Selecione o(s) assento(s)</Titulo>
                <Assentos>
                    {assentos.seats.map(assento => (
                        <Assento 
                            key={assento.id} 
                            $disponivel={assento.isAvailable}
                            $selecionado={assentosSelecionados.includes(assento.id)}
                            onClick={() => selecionarAssento(assento.id, assento.isAvailable, assento.name)}
                        >
                            {assento.name}
                        </Assento>  
                    ))}
                </Assentos>
                <form onSubmit={reservarAssentos}>
                    <InputGroup>
                        <InputTitle htmlFor="name">Nome do comprador(a)</InputTitle>
                        <input 
                            placeholder="Digite seu nome"
                            id="name"
                            required
                            type="text"
                            pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputTitle htmlFor="cpf">CPF do comprador(a)</InputTitle>
                        <input 
                            placeholder="Digite seu cpf"
                            id="cpf"
                            required
                            type="text"
                            value={cpf}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            onChange={e => setCpf(e.target.value)}
                        />
                    </InputGroup>

                    <Reservar type="submit">Reservar assento(s)</Reservar>
                </form>
            </Wrapper>
        </div>
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

const Assentos = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr); /* 10 cadeiras por fileira */
    gap: 19px 8px;
    width: fit-content;
    padding-bottom: 38px;
    border-bottom: 1px solid #4E5A65;
`
const Assento = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border-radius: 12px; 
    border: ${({ $selecionado }) => ($selecionado ? "2px solid #EE897F" : "none")};
    cursor: ${({ $disponivel }) => ($disponivel ? "pointer" : "not-allowed")};
    background-color: ${({ $disponivel, $selecionado }) => !$disponivel ? "#2B2D36" : $selecionado ? "#FADBC5" : "#9DB899"};
    color: #2B2D36;
    font-family: "roboto", serif;
    font-weight: 400;
`
const Reservar = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 38px;
    background-color: #EE897F;
    color: #2B2D36;
    text-align: center;
    font-family: "sarala", serif;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none; 
    border-radius: 8px;
    border: none;
    cursor: pointer;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    margin-top: 24px;

    input{
        outline: none;
        width: 338px;
        padding: 15px;
        border: 1px solid #D4D4D4;
        border-radius: 8px;
    }

    input::placeholder{
        font-size: 16px;
        font-family: "roboto", serif;
        font-style: italic;
    }
`
const InputTitle = styled.label`
    margin-bottom: 5px;
    font-family: "sarala", serif;
    font-size: 16px;
    color: white;
    font-weight: 400;
`