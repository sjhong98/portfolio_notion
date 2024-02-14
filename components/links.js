import { Button } from "@/styles/styled-components";
import github from '../public/github_logo.png';
import github_night from '../public/github_logo_night.png';
import naverBlog from '../public/네이버블로그.png';
import portfolio from '../public/port.png';
import Image from 'next/image';
import { useRouter } from "next/router";
import { useRef } from "react";
import insta from '../public/insta.png';

export default function Links(props) {
    const router = useRouter();
    const linkRef = useRef(null);

    const handleLinkClick = () => {
        linkRef.current.classList.add('routing');
        setTimeout(() => {
            router.push('https://hongseungjae.info/');
            // linkRef.current.classList.remove('routing');
        }, 1500)
    }

    return (
        <div className='flex flex-row sm:mt-6 mt-3'>
            <Button className='rounded-xl' onClick={() => router.push('https://github.com/sjhong98')}>
                { props.fontColor === "black" ?
                    <Image src={github} /> 
                    :
                    <Image src={github_night} />
                }
                
            </Button>
            <Button className='rounded-xl sm:ml-6 ml-2' onClick={() => router?.push('https://blog.naver.com/elyon98')}>
                <Image src={naverBlog} />
            </Button>
            <Button className='rounded-xl sm:ml-6 ml-2' style={{transform:'rotate(-23deg)'}} onClick={handleLinkClick}>
                <Image src={portfolio} />
            </Button>
            {/* <Button className='rounded-xl sm:ml-6 ml-2' onClick={() => router?.push('https://www.instagram.com/hong_seung_jae_/')}>
                <Image src={insta} />
            </Button> */}
            <div ref={linkRef} className="rounded-full w-1 h-1 opacity-0" style={{backgroundColor:'#FEE832', zIndex:9999}} />
        </div>
    )
}