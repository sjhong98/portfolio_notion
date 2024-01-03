import { F4, Header } from "@/styles/styled-components";
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { useState, useRef, useEffect } from "react";
import urlImg from '../public/image2.png';
import Image from "next/image";
import { useRouter } from "next/router";

export default function HeaderComponent(props) {
    const [isDay, setIsDay] = useState(true);
    const linkRef = useRef(null);
    const router = useRouter();

    const handleClick = () => {
        if(isDay) {
            props.changeFontColor("white");
            props.changeBgColor("black");
            setIsDay(prev => !prev);
        }
        else {
            props.changeFontColor("black");
            props.changeBgColor("white");
            setIsDay(prev => !prev);
        }
    }

    const handleLinkClick = () => {
        linkRef.current.classList.add('routing');
        setTimeout(() => {
            linkRef.current.classList.remove('routing');
            router.push('https://hongseungjae.info/');
        }, 1500);
    }

    return (
        <Header color={isDay ? 'white' : 'black'}>
            <F4>홍승재의 이력서 | 포트폴리오</F4>
            <div className="flex flex-row">
                <Image src={urlImg} className="w-[2.5vw] h-[2.5vh] mr-6 mt-[0.2vh] cursor-pointer" onClick={handleLinkClick} />
                <div ref={linkRef} className="fixed rounded-full w-1 h-1 opacity-0" style={{backgroundColor:'#FEE832'}} />
            { isDay ?
                <ModeNightIcon className="text-black mr-6 cursor-pointer" onClick={handleClick} />
                :
                <LightModeIcon className="text-white mr-6 cursor-pointer" onClick={handleClick}  />
            }
            </div>
        </Header>
    )
}