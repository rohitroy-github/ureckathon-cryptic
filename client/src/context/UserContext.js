import {useState } from 'react'
import UserContext from './appContext'

const AppState = (props) => {
    const [user, setuser] = useState({userWallet:'13wqewqe231trtyty0wq'})
    const [projectdetails,setprojectList]=useState({})
    return (
    <UserContext.Provider value={{ user, setuser,projectdetails,setprojectList}}>
        {props.children}
    </UserContext.Provider>)


}

export default AppState