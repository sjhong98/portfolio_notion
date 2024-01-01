import styled from 'styled-components';

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
`

const Font = styled.p`
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

export const F1 = styled(Font)`
    font-size: 4rem;
    font-family: 'pret-l';
`

export const F2 = styled(Font)`
    font-size: 2rem;
`

export const F3 = styled(Font)`
    font-size: 1.3rem;
`

export const F4 = styled(Font)`
    font-size: 1rem;
`

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20vw;
  padding-right: 20vw;
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
`

