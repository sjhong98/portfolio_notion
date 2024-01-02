import { F2, F3, F4, F5, ProjectContainer } from '@/styles/styled-components';
import Image from 'next/image';

export default function Project(props) {
    const item = props.item;

    const handleProjectClicked = () => {
        props.changePoped(true);
      }

    return (
        <ProjectContainer 
            className='shadow-md flex flex-col justify-center items-center' 
            onClick={() => handleProjectClicked()}
        >
            <Image src={`/${item.title}.gif`} alt="..." width={100} height={100} className='mb-3 w-full' />
            <div className='flex flex-col'>
                <F4>{item.title} : {item.subtitle}</F4>
                <div className='flex flex-row'>
                <F5>{item.main}</F5>
                </div>
            </div>    
        </ProjectContainer>
            
    )
}