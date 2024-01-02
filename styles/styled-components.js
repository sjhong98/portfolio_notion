import styled, { keyframes } from 'styled-components';
import css from 'styled-jsx/css';

export const Header = styled.div`
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
`

const Font = styled.pre`
    font-family: 'pret-el';
    margin-bottom: 1vh;
`

export const Button = styled.div`
    &:hover {
        scale: 1.3;
    }
    width: 3vw;
    height: 3vw;
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
    font-size: 3.5rem;
    font-family: 'pret-l';
`

export const F2 = styled(Font)`
    font-size: 2.5rem;
    font-family: 'pret-l';
    margin-bottom: 2vh;
`

export const F2_2 = styled(Font)`
    font-size: 2rem;
`

export const F3 = styled(Font)`
    font-size: 1.3rem;
    white-space: pre-wrap;
`

export const F3_2 = styled(Font)`
    font-size: 1.3rem;
    font-family: 'pret-l';
    margin-bottom: 0.5vh;
`

export const F4 = styled(Font)`
    font-size: 1rem;
    white-space: pre-wrap;
    line-height: 2.7vh;
`

export const F5 = styled(Font)`
    font-size: 1rem;
    color: #999;
    white-space: pre-wrap;
`

export const F5_2 = styled(Font)`
    font-size: 1.3rem;
    color: #999;
`

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.fontColor};
  background-color: ${props => props.bgColor};
`

export const Content = styled.div`
    width: 60vw;
    min-height: 100vh;
    height: auto;
    padding-left: 10vw;
    padding-right: 10vw;
    margin-top: 10vh;
    margin-left: ${({ poped }) => (poped ? '0vw' : '20vw')};
    margin-right: ${({ poped }) => (poped ? '40vw' : '20vw')};
    z-index: 2;
`

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

const Pop = styled.div`
    width: 40vw;
    height: 100vh;
    position: fixed;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.08);
    border-left-width: 1px;
    border-color: white;
    z-index: 5;
    overflow-y: auto;
`

export const PopUp = styled(Pop)`
    right: -40vw;
    animation: ${popedDownAnim} 0.3s ease forwards;
    background-color: ${props => props.bgColor};
`

export const PopDown = styled(Pop)`
    right: 0vw;
    animation: ${popedUpAnim} 0.3s ease forwards;
    background-color: ${props => props.bgColor};
`