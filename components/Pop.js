import { PopDown, PopUp, F1, F2, F3, F4, F2_2, F0, F5, F5_2, Space, F3_2 } from "@/styles/styled-components";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Image from 'next/image';

export default function Pop(props) {
    const poped = props.poped;
    const bgColor = props.bgColor;
    const changePoped = props.changePoped;
    const item = props.item;

    const handleClick = () => {
        changePoped(false);
    }

    return (
        poped ? 
            <PopUp bgColor={bgColor} >
                <div className="h-[5vh] w-full flex flex-row items-center pl-6" >
                    <KeyboardDoubleArrowRightIcon className="cursor-pointer" onClick={handleClick} />
                </div>
              <PopComponent item={item} changePoped={changePoped} />
            </PopUp>
            :
            <PopDown bgColor={bgColor}>
                <div className="h-[5vh] w-full flex flex-row items-center pl-6">
                    <KeyboardDoubleArrowRightIcon className="cursor-pointer" />
                </div>
              <PopComponent item={item} />
            </PopDown>
    )
}

function PopComponent(props) {
    const item = props.item;

    return (
        <div>
            <div className="w-full min-h-[120vh] p-20">
                <F1>{item.title}</F1>
                <F2_2 className="-mt-6">: {item.subtitle}</F2_2>
                <F5_2>{item.main}</F5_2>
                <div className="mt-12">
                    <Image src={`/${item.title}.gif`} width={500} height={100} className="" />
                    { item.image === 2 ?
                        <Image src={`/${item.title}2.gif`} width={500} height={100} className="mt-12" />
                        :
                        <></>
                    }
                </div>
                <div className="flex flex-row mt-20">
                    <div className="w-1/3 h-auto">
                        <F3_2>기간</F3_2>
                        <F4>{item.duration}</F4>
                        <F3_2 className="mt-12">경험 기술</F3_2>
                        { item.stack!==undefined && item.stack.map((_item, index) => {
                            return (
                                <div key={index} className="flex flex-row -mb-2"> <F4>{_item}</F4> </div>
                            )
                        })}
                    </div>
                    <div className="w-1/2 h-auto">
                        <F3_2>담당 파트</F3_2>
                        <F4>{item.part}</F4>
                        <F3_2 className="mt-12">주요 구현내용</F3_2>
                        { item.dev!==undefined && item.dev.map((item, index) => {
                            return (
                                <div className="-mb-2"><F4>·  {item}</F4> </div>
                            )
                        })}
                        <F3_2 className="mt-12">주요 기능</F3_2>
                        { item.func!==undefined && item.func.map((item, index) => {
                            return (
                                <div className="-mb-2"> <F4>·  {item}</F4> </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-16">
                    <F3_2>문제 해결</F3_2>
                    { item.troubles!==undefined && item.troubles.map((_item, index) => {
                        return (
                            <div className="mt-8">
                                <F3>{index+1} - <span className="pl-1 pr-1 bg-red-100">{_item}</span></F3>
                                <F4>{item.solutions[index]}</F4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}