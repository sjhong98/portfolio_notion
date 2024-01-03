import { F3 } from "@/styles/styled-components";
import Links from "./links";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';

export default function Intro(props) {
    const night = "text-white mt-1 sm:mr-6 mr-2";
    const day = "text-black mt-1 sm:mr-6 mr-2";

    return (
        <div className='flex flex-col sm:ml-32 ml-0 mt-3'>
            <div className="flex flex-row">
                <AccessibilityIcon className={props.fontColor==="black" ? day : night} />
                <F3>남, 1998.09.01 (25세)</F3>
            </div>
            <div className="flex flex-row">
                <PhoneIcon className={props.fontColor==="black" ? day : night} />
                <F3>010-2892-6408</F3>
            </div>
            <div className="flex flex-row">
                <AlternateEmailIcon className={props.fontColor==="black" ? day : night} />
                <F3>sjhong98@icloud.com</F3>
            </div>
            <div className="flex flex-row">
                <HomeIcon className={props.fontColor==="black" ? day : night} />
                <F3>서울특별시 서대문구 연희로 11마길</F3>
            </div>
            <Links fontColor={props.fontColor} />
        </div>
    )
}