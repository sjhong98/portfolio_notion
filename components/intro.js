import { F3 } from "@/styles/styled-components";
import Links from "./links";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Intro() {
    return (
        <div className='flex flex-col ml-32'>
            <div className="flex flex-row">
                <AccessibilityIcon className="text-black mt-1 mr-6" />
                <F3>남, 1998.09.01 (25세)</F3>
            </div>
            <div className="flex flex-row">
                <PhoneIcon className="text-black mt-1 mr-6" />
                <F3>010-2892-6408</F3>
            </div>
            <div className="flex flex-row">
                <AlternateEmailIcon className="text-black mt-1 mr-6" />
                <F3>sjhong98@icloud.com</F3>
            </div>
            <div className="flex flex-row">
                <F3>서울특별시 서대문구 연희로 11마길</F3>
            </div>
            <Links />
        </div>
    )
}