import styled, { keyframes } from 'styled-components';
// import css from 'styled-jsx/css';

export const Header = styled.div`
    @media (max-width: 800px) {
        width: 100vw;
        height: 5vh;
        position: fixed;
        background-color: ${props => props.color};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 1vw;
        padding-right: 1vw;
        z-index: 3;
    }
    
    @media (min-width: 801px) {
        width: 100vw;
        height: 5vh;
        position: fixed;
        background-color: ${props => props.color};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 1vw;
        padding-right: 1vw;
        z-index: 3;
    }
`

const Font = styled.pre`
    font-family: 'pret-el';
    margin-bottom: 1vh;
`

export const Button = styled.div`
    &:hover {
        scale: 1.3;
    }
    @media (max-width: 800px) {
        width: 12vw;
        height: 12vw;
    }
    @media (min-width: 801px) {
        width: 3vw;
        height: 3vw;
    }
    
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const F0 = styled(Font)`
    font-size: 4rem;
    font-family: 'pret-l';
`

export const F1 = styled(Font)`
    @media (max-width: 800px) {
        font-size: 3rem;
        font-family: 'pret-l';
        white-space: pre-wrap;
    }
    @media (min-width: 801px) {
        font-size: 3.5rem;
        font-family: 'pret-l';
    }
    
`

export const F2 = styled(Font)`
    font-size: 2.5rem;
    font-family: 'pret-l';
    margin-bottom: 2vh;
`

export const F2_2 = styled(Font)`
    font-size: 2rem;
    white-space: pre-wrap;
`

export const F3 = styled(Font)`
    @media (max-width: 800px) {
        font-size: 0.9rem;
        white-space: pre-wrap;
    }
    @media (min-width: 801px) {
        font-size: 1.3rem;
        white-space: pre-wrap;
    }
`

export const F3_2 = styled(Font)`
    @media (max-width: 800px) {
        font-size: 1.3rem;
        font-family: 'pret-l';
        margin-bottom: 0.5vh;
        white-space: pre-wrap;
    }
    
    @media (min-width: 801px) {
        font-size: 1.3rem;
        font-family: 'pret-l';
        margin-bottom: 0.5vh;
    }
    
`

export const F4 = styled(Font)`
    @media (max-width: 800px) {
        font-size: 1rem;
        white-space: pre-wrap;
        line-height: 2.7vh;
    }
    @media (min-width: 801px) {
        font-size: 0.6rem;
        white-space: pre-wrap;
        line-height: 2.7vh;
    }
`

export const F4_2 = styled(Font)`
    @media (max-width: 800px) {
        font-size: 1rem;
        line-height: 2.7vh;
    }
    @media (min-width: 801px) {
        font-size: 0.6rem;
        white-space: pre-wrap;
        line-height: 2.7vh;
    }
`

export const F5 = styled(Font)`
    font-size: 1rem;
    color: #999;
    white-space: pre-wrap;
`

export const F5_2 = styled(Font)`
    font-size: 1.3rem;
    color: #999;
    white-space: pre-wrap;
`

export const Container = styled.div`
    @media (max-width: 800px) {
        min-height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${props => props.fontColor};
        background-color: ${props => props.bgColor};
        /* background-color: firebrick; */
    }

    @media (min-width: 801px) {
        min-height: 100vh;
        min-width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${props => props.fontColor};
        background-color: ${props => props.bgColor};
    }
  
`

export const Content = styled.div`
    @media (max-width: 800px) {
        width: 100vw;
        min-height: 100vh;
        height: auto;
        margin-top: 10vh;
        z-index: 2;
        padding-left:2vw;
    }

    @media (min-width: 801px) {
        width: 60vw;
        min-height: 100vh;
        height: auto;
        padding-left: 10vw;
        /* padding-right: 10vw; */
        margin-top: 10vh;
        margin-left: ${({ poped }) => (poped ? '0vw' : '20vw')};
        margin-right: ${({ poped }) => (poped ? '40vw' : '20vw')};
        z-index: 2;
    }

`

// @media (max-width: 800px) {
        
// }

// @media (min-width: 801px) {
    
// }

export const Space = styled.div`
    width: 100%;
    height: 7.5vh;
`

export const ProjectContainer = styled.div`
    &:hover {
        scale: 1.05;
    }
    cursor: pointer;
`

const popedUpAnim = keyframes`
    0% {
        transform: translateX(0vw);
    }
    100% {
        transform: translateX(40vw);
    }
`

const popedDownAnim = keyframes`
    0% {
        transform: translateX(0vw);
    }
    100% {
        transform: translateX(-40vw);
    }
`

const popedUpAnimM = keyframes`
    0% {
        transform: translateX(0vw);
    }
    100% {
        transform: translateX(100vw);
    }
`

const popedDownAnimM = keyframes`
    0% {
        transform: translateX(0vw);
    }
    100% {
        transform: translateX(-41vw);
    }
`

const Pop = styled.div`
    @media (max-width:800px) {
        width: 100vw;
    }
    @media (min-width:801px) {
        width: 40vw;
    }
    height: 100vh;
    position: fixed;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.08);
    border-left-width: 1px;
    border-color: white;
    z-index: 5;
    overflow-y: scroll;
`

export const PopUp = styled(Pop)`
    @media (max-width: 800px) {
        animation: ${popedDownAnim} 0.3s ease forwards;
        right: -40vw;
    }
    @media (min-width: 801px) {
        animation: ${popedDownAnimM} 0.3s ease forwards;
        right: -40vw;
    }
    background-color: ${props => props.bgColor};
`

export const PopDown = styled(Pop)`
    @media (max-width: 800px) {
        animation: ${popedUpAnim} 0.3s ease forwards;
        right: 0vw;
    }
    @media (min-width: 801px) {
        animation: ${popedUpAnimM} 0.3s ease forwards;
        right: 0vw;
    }
    background-color: ${props => props.bgColor};
`