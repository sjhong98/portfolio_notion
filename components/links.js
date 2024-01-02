import { Button } from "@/styles/styled-components";
import github from '../public/github_logo.png';
import github_night from '../public/github_logo_night.png';
import naverBlog from '../public/네이버블로그.png';
import portfolio from '../public/port.png';
import Image from 'next/image';
import { useRouter } from "next/router";

export default function Links(props) {
    const router = useRouter();
    return (
        <div className='flex flex-row mt-6'>
            <Button className='rounded-xl' onClick={() => router.push('https://github.com/sjhong98')}>
                { props.fontColor === "black" ?
                    <Image src={github} /> 
                    :
                    <Image src={github_night} />
                }
                
            </Button>
            <Button className='rounded-xl ml-6' onClick={() => router?.push('https://blog.naver.com/elyon98')}>
                <Image src={naverBlog} />
            </Button>
            <Button className='rounded-xl ml-6' style={{transform:'rotate(-23deg)'}} onClick={() => router.push('https://hongseungjae.info/')}>
                <Image src={portfolio} />
            </Button>
        </div>
    )
}