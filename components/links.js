import { Button } from "@/styles/styled-components";
import github from '../public/github_logo.png';
import naverBlog from '../public/네이버블로그.png';
import Image from 'next/image';

export default function Links() {
    return (
        <div className='flex flex-row mt-6'>
            <Button className='rounded-xl'>
            <Image src={github} />
            </Button>
            <Button className='rounded-xl ml-6'>
            <Image src={naverBlog} />
            </Button>
        </div>
    )
}