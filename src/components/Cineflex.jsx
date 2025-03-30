import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Cineflex() {
    return(
        <Container>
            <Logo to="/">
                <img src={logo}/>
                Cineflex
            </Logo>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    background-color: #EE897F;
    display: flex;
    justify-content: center;
    height: 67px;
`
const Logo = styled(Link)`
    font-size: 34px;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: #FADBC5;
    font-family: 'raleway', serif;
    img {
        width: 40px;
        margin-right: 10px;
    }
`