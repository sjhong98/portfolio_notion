import { F2, F3, F3_2, F4, Font } from "@/styles/styled-components";
import styled from "styled-components";
import Image from "next/image";
import estp from '../public/estp.png';
import son from '../public/son.png';


export default function QnA() {
    return (
        <div className="ml-8">
            <F7>MBTI는?</F7>
            <F8>확신의 ESTP 입니다. 한번도 바뀐 적이 없어요.</F8>
            <F7_2>취미는?</F7_2>
            <F8>여행을 정말 사랑합니다. </F8>
            <F8>한 달에 국내여행을 2-3번씩은 꼭 다니는 편이고, 해외여행도 즐겨다닙니다.</F8>
            <F8> </F8>
            <F8>축구보는 것도 좋아합니다.</F8>
        </div>
    )
}

const F7 = styled(Font)`
    font-size: 1.8rem;
`

const F7_2 = styled(F7)`
    margin-top: 5vh;
`

const F8 = styled(Font)`
    font-size: 1.3rem;
`
