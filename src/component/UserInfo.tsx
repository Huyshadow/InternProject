import {useContext} from "react";
import {DataUser} from "./User.tsx";
import {useState, useLayoutEffect} from 'react'
import '../style/UserInfo.css'

type UserInfo = {
    name: string;
    img: string;
    email: string;
    address: string;
    phone: string
}

const UserInfo = () => {
    const dataInfo:any= useContext(DataUser)
    const [user,setUser]:UserInfo = useState({})
    useLayoutEffect(():void => {
        setUser({
            img:dataInfo.picture.large,
            name: dataInfo.name.first,
            email: dataInfo.email,
            address:dataInfo.location.city,
            phone:dataInfo.phone

        })
    }, [dataInfo])
    return (
        <>
            <div className='body-userinfo'>
                <img src={user.img}/>
                <div className='body-userInfo-detail'>
                    <h1>First name: {user.name}</h1>
                    <h2>Email     : {user.email}</h2>
                    <h2>Address   : {user.address}</h2>
                    <h2>Phone     : {user.phone}</h2>
                </div>
            </div>
        </>
    )

}
export default UserInfo;