import { F3, F4 } from "@/styles/styled-components";
import styled from "styled-components";
import Image from "next/image";


export default function Chip(props) {
    return (
        <Div className="bg-gray-100 w-1/2 flex flex-row justify-center h-[3.3vh] mb-3 rounded-xl shadow-md">
            <Image src={`/${props.title}.png`} width={1000} height={1000} className="w-[1vw] h-[1vw] mt-1 mr-2" />
            <F3_typo>{props.title}</F3_typo>
        </Div>
    )
}

const F3_typo = styled(F3)`
    font-family: 'bn';
    color: #666;
`

const Div = styled.div`
    &:hover {
        scale: 1.15;
    }
`