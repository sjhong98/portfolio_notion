import propic from '../public/propic2.jpg';
import { F1, F2, F3, F4, Container, Content, Button, Space } from '@/styles/styled-components';
import HeaderComponent from '@/components/header';
import Image from 'next/image';
import Intro from '@/components/intro';
import { useState } from 'react';
import { projectList } from '@/components/projectList';
import Project from '@/components/projects';

export default function Home() {
  const [fontColor, setFontColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");
  const projects = projectList;

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
          <Intro fontColor={fontColor} />
        </div>
        <Space />
        <div>
          <F2>Education</F2>
          <F3>2014.09 | 고등학교 졸업 검정고시</F3>
          <F3>2018.03 | 상명대학교 입학</F3>
          <F3>2021.03 | 육군 병장 만기전역</F3>
          <F3>2024.02 | 컴퓨터과학과, 역사콘텐츠전공 복수전공 졸업예정</F3>
        </div>
        <Space />
        <div>
          <F2>Portfolio</F2>
          <div className='grid grid-cols-2 gap-6'>
          {  projects.map((item, index) => {
            return (
              <Project key={index} item={item} />
            )  
          })}
          </div>

          
        </div>
        <Space />
      </Content>
    </Container>
  )
}
