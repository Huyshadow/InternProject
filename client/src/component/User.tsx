import {useState, useEffect, createContext} from "react";
import UserInfo from "./UserInfo.tsx";
import '../style/User.css'
import axios from "axios";

export const DataUser = createContext({})
const User = () => {
    const [count,setCount] = useState(0)
    const [showUser, setShowUser] = useState(false)
    const [userInfo, setUserInfo] = useState({})


    const instance = axios.create({
        baseURL:'https://randomuser.me/',
        headers:{'X-Custom-header': 'foobar'}
        }
    )
    const handleShowUser = () => {
        setShowUser(!showUser)
        if(showUser){
            setCount(count+1)
        }
    }

    const handleUserInfo = async () => {
        instance.get('api/').then((respone)=>{
            setUserInfo(respone.data.results[0])
        })
    }
    useEffect(() => {
        handleUserInfo()
    },[count])
    return (
        <>
            <div className="body-user">
                {showUser && <div className = 'body-user-fetch'>
                    <DataUser.Provider value={userInfo}>
                        <UserInfo/>
                    </DataUser.Provider>
                </div>}
                <div className = 'body-user-control'>
                    <button onClick={handleShowUser}> Show User </button>
                    <form>
                        <input type='text' placeholder='Checkout'></input>
                    </form>
                </div>
            </div>
        </>
    )
}
export default User ;