import './App.css';
import Testimonio from './componentes/testimonio'
import styled, { css, withTheme } from "styled-components";

/* Ojo el style component se define en mayusculas para despues llamar el elemento dentro de <> */
const Title = styled.h1`
    max-width: 940px;
    font-size: 2.5em;
    font-family: 'Abel', sans-serif;
    font-weight: 700;
    line-height: 1.1;
    margin: 40px 0;
    text-align: center;

`;

const ContainerApp = styled.div`
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 18px;
    background-color: #f5f6f7;
    `;

const ContainerPricipal = styled.div`
    min-height: 600px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    `; 

function App() {
  return (
    <ContainerApp>

        <ContainerPricipal>

            <Title>Esto es el Testimonial del proyecto</Title>
            <Testimonio 
                nombre='Enma Whatson'
                cargo='Engineer'
                empresa='Spotify'
                imagen={require('./imagenes/1.jpg')}
                alt='imagen 1'
                testimonios='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laboriosam repellendus culpa quaerat! Magnam totam corrupti, vitae laudantium excepturi consequatur blanditiis facilis sit. Id, fugit vel vero rem minus quidem?' />
            <Testimonio 
                nombre='David Garcìa'
                cargo='Developer'
                empresa='Google'
                imagen={require('./imagenes/2.jpg')}
                alt='imagen 2'
                testimonios='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laboriosam repellendus culpa quaerat! Magnam totam corrupti, vitae laudantium excepturi consequatur blanditiis facilis sit. Id, fugit vel vero rem minus quidem?' />
            <Testimonio 
                nombre='Marcos Olivera'
                cargo='Analist'
                empresa='Oracle'
                imagen={require('./imagenes/3.jpg')}
                alt='imagen 3'
                testimonios='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laboriosam repellendus culpa quaerat! Magnam totam corrupti, vitae laudantium excepturi consequatur blanditiis facilis sit. Id, fugit vel vero rem minus quidem?' />

        </ContainerPricipal>

    </ContainerApp>
  );
}

export default App;
