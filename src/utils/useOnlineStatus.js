import { useEffect,useState } from "react"

const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(true)
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
    },[])
    // check if online
    // return boolean value
    return onlineStatus;
}
export default useOnlineStatus;