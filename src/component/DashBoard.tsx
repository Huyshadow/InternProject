import "../style/DashBoard.css"
import {AiOutlineUser,AiFillHome} from 'react-icons/ai'
import {MdOutlineEmojiTransportation, MdPolicy} from 'react-icons/Md'
import {CiBag1} from 'react-icons/ci'
import {GiExitDoor} from 'react-icons/gi'

const DashBoard = () => {
    return (
        <>
            <div className="body_db">
                <ul>
                    <li> <AiOutlineUser/> Admin </li>
                    <li> <MdOutlineEmojiTransportation/> Transportation </li>
                    <li> <AiFillHome/> Basement </li>
                    <li> <CiBag1/> Goods </li>
                    <li> <MdPolicy/> Policy</li>
                    <li className='last-li'> <GiExitDoor/>Exit </li>
                </ul>
            </div>
        </>
    )
}
export default DashBoard;