import { F4, Header } from "@/styles/styled-components";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from "react";

export default function HeaderComponent(props) {
    const [isDay, setIsDay] = useState(true);

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

    return (
        <Header>
            <F4>홍승재의 이력서 | 포트폴리오</F4>
            <LightModeIcon className="text-black mr-6 cursor-pointer" onClick={handleClick} />
        </Header>
    )
}