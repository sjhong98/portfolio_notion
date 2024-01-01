import propic from '../public/propic2.jpg';
import { F1, F2, F3, F4, Container, Content, Button } from '@/styles/styled-components'
import HeaderComponent from '@/components/header'
import Image from 'next/image'
import Intro from '@/components/intro';
import { useState } from 'react';

export default function Home() {
  const [fontColor, setFontColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");

  const changeFontColor = (props) => {
    setFontColor(props);
  }

  const changeBgColor = (props) => {
    setBgColor(props);
  }

  return (
    <Container fontColor={fontColor} bgColor={bgColor}>
      <HeaderComponent changeFontColor={changeFontColor} changeBgColor={changeBgColor} />
      <Content>
        <F1>홍승재의 이력서 | 포트폴리오</F1>
        <div className='flex flex-row mt-12'>
          <Image src={propic} className='w-1/4'/>
          <Intro />
        </div>
      </Content>
    </Container>
  )
}
