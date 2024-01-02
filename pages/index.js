import propic from '../public/propic2.jpg';
import { F1, F2, F3, F4, Container, Content, Space } from '@/styles/styled-components';
import HeaderComponent from '@/components/header';
import Image from 'next/image';
import Intro from '@/components/intro';
import { useEffect, useRef, useState } from 'react';
import { projectList } from '@/components/projectList';
import Project from '@/components/projects';
import Pop from '@/components/Pop';
import SelfIntro from '@/components/self-intro';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Home() {
  const toggleRef3 = useRef(null);
  const toggleRef2 = useRef(null);
  const toggleRef1 = useRef(null);
  const [fontColor, setFontColor] = useState("black");
  const [bgColor, setBgColor] = useState("white");
  const [poped, setPoped] = useState(false);
  const [popItem, setPopItem] = useState({});
  const [toggle3Open, setToggle3Open] = useState(false);
  const [toggle2Open, setToggle2Open] = useState(false);
  const [toggle1Open, setToggle1Open] = useState(false);
  const projects = projectList;

  const changeFontColor = (props) => {
    setFontColor(props);
  }

  const changeBgColor = (props) => {
    setBgColor(props);
  }

  const changePoped = (props) => {
    setPoped(props);
    console.log("change pop : " , props);
  }

  const changeIndex = (index) => {
    setPopItem(projects[index]);
  }

  const handleToggle3Click = () => {
    setToggle3Open((prev) => !prev);
  }

  const handleToggle2Click = () => {
    setToggle2Open((prev) => !prev);
  }

  const handleToggle1Click = () => {
    setToggle1Open((prev) => !prev);
  }

  useEffect(() => {
    if(toggle2Open) {
      toggleRef2.current.classList.add('toggleOpened');
      toggleRef2.current.classList.remove('toggleClosed');
    } else {
      toggleRef2.current.classList.add('toggleClosed');
      toggleRef2.current.classList.remove('toggleOpened');
    }
  }, [toggle2Open])

  useEffect(() => {
    if(toggle1Open) {
      toggleRef1.current.classList.add('toggleOpened');
      toggleRef1.current.classList.remove('toggleClosed');
    } else {
      toggleRef1.current.classList.add('toggleClosed');
      toggleRef1.current.classList.remove('toggleOpened');
    }
  }, [toggle1Open])

  useEffect(() => {
    if(toggle3Open) {
      toggleRef3.current.classList.add('toggleOpened');
      toggleRef3.current.classList.remove('toggleClosed');
    } else {
      toggleRef3.current.classList.add('toggleClosed');
      toggleRef3.current.classList.remove('toggleOpened');
    }
  }, [toggle3Open])


  return (
    <Container fontColor={fontColor} bgColor={bgColor} >
      <HeaderComponent changeFontColor={changeFontColor} changeBgColor={changeBgColor} />
      <Content poped={poped}>
        <F1>홍승재의 이력서 | 포트폴리오</F1>
        <div className='flex flex-row mt-12'>
          <Image src={propic} className='w-1/4 h-1/4'/>
          <Intro fontColor={fontColor} x/>
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
          <div className='flex flex-row items-center cursor-pointer' onClick={handleToggle1Click} >
            <PlayArrowIcon className='mb-2 mr-2' ref={toggleRef1} />
            <F2>Portfolio</F2>
          </div>
          {
            toggle1Open ?
            <div className='grid grid-cols-2 gap-6'>
              {  projects.map((item, index) => {
                return (
                  <div key={index} onClick={() => {changeIndex(index)}}>
                    <Project key={index} item={item} changePoped={changePoped} />
                  </div>
                )  
              })}
              </div>
                    
            :
            <></>
          }
        </div>
        <Space />
          <div className='flex flex-row items-center cursor-pointer' onClick={handleToggle3Click} >
            <PlayArrowIcon className='mb-2 mr-2' ref={toggleRef3} />
            <F2>Stacks</F2>
          </div>
        <Space />
        <div className='flex flex-row items-center cursor-pointer' onClick={handleToggle2Click} >
          <PlayArrowIcon className='mb-2 mr-2'ref={toggleRef2} />
          <F2>자기소개</F2>
        </div>
        { toggle2Open ?
          <SelfIntro bgColor={bgColor} />
          :
          <></>
        }
        <Space />
        <Space />
        <Space />
      </Content>
      <Pop item={popItem} poped={poped} bgColor={bgColor} changePoped={changePoped} />
    </Container>
  )
}
