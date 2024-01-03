import { PopDown, PopUp, F1, F3, F4, F2_2, F5_2, F3_2, F4_2, F5, F6 } from "@/styles/styled-components";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Image from 'next/image';
import notionImg from '../public/Notion.png';
import githubImg from '../public/Github.png';
import urlImg from '../public/url.png';
import { useRouter } from "next/router";

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
                <div className="h-[5vh] w-full flex flex-row items-center pl-6 fixed" >
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
    const router = useRouter();

    return (
        <div>
            <div className="sm:w-full w-[100vw] min-h-[120vh] sm:p-20 p-10 ">
                <F1>{item.title}</F1>
                <F2_2 className="-mt-6">: {item.subtitle}</F2_2>
                <F5_2>{item.main}</F5_2>
                <div className="mt-16">
                    <Image src={`/${item.title}.gif`} width={500} height={100} className="" />
                    { item.image === 2 ?
                        <Image src={`/${item.title}2.gif`} width={500} height={100} className="mt-12" />
                        :
                        <></>
                    }
                </div>
                <F4 className="mt-8 w-5/6 border-l-2 pl-3 border-black">{item.cap}</F4>
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
                    <div className="w-1/2 h-auto sm:ml-0 ml-4">
                        <F3_2>담당 파트</F3_2>
                        <F4>{item.part}</F4>
                        <F3_2 className="mt-12">주요 구현내용</F3_2>
                        { item.dev!==undefined && item.dev.map((item, index) => {
                            return (
                                <div key={index} className="-mb-2"><F4_2>·  {item}</F4_2> </div>
                            )
                        })}
                        <F3_2 className="mt-12">주요 기능</F3_2>
                        { item.func!==undefined && item.func.map((item, index) => {
                            return (
                                <div key={index} className="-mb-2"> <F4_2>·  {item}</F4_2> </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-16">
                    <F3_2>문제 해결</F3_2>
                    { item.troubles!==undefined && item.troubles.map((_item, index) => {
                        return (
                            <div key={index} className="mt-8">
                                <F3>{index+1} - <span className="pl-1 pr-1 bg-red-100">{_item}</span></F3>
                                <F4>{item.solutions[index]}</F4>
                            </div>
                        )
                    })}
                </div>
                <div className="mt-16">
                    <F3_2>Links</F3_2>
                    <div className="flex flex-row mt-8">
                    { item.notion !== "" ?
                        <Image src={notionImg} className="sm:w-[4vw] w-1/4 cursor-pointer mr-8" onClick={()=>{router.push(`${item.notion}`)}} />
                        :
                        <></>
                    }
                    { item.github !== "" ?
                        <Image src={githubImg} className="sm:w-[4vw] w-1/4 cursor-pointer mr-8" onClick={()=>{router.push(`${item.github}`)}} />
                        :
                        <></>
                    }
                    { item.url !== "" ?
                        <Image src={urlImg} className="sm:w-[4vw] w-1/4 cursor-pointer" onClick={()=>{router.push(`${item.url}`)}} />
                        :
                        <></>
                    }
                    </div>
                </div>
                { item.etc!=="" ?
                <F6 className="mt-20">※ {item.etc}</F6>
                :
                <></>

                }
                
                <div className="w-full h-[20vh]" />
            </div>
        </div>
    )
}