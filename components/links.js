import { Button } from "@/styles/styled-components";
import github from '../public/github_logo.png';
import github_night from '../public/github_logo_night.png';
import naverBlog from '../public/네이버블로그.png';
import Image from 'next/image';

export default function Links(props) {
    return (
        <div className='flex flex-row mt-6'>
            <Button className='rounded-xl'>
                { props.fontColor === "black" ?
                    <Image src={github} /> 
                    :
                    <Image src={github_night} />
                }
                
            </Button>
            <Button className='rounded-xl ml-6'>
                <Image src={naverBlog} />
            </Button>
        </div>
    )
}