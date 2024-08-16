import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { handleLogout, verifyUser } from "../../helpers/api";
import { IUser } from "../../helpers/types";

export const Layout = () => {
    const navigate = useNavigate()
    const [account, setAccount] = useState<IUser|null>(null)
    useEffect(()=>{
        verifyUser()
        .then(response=>{
            if(!response.user){
                navigate('/login')
            }else{
                setAccount(response.user)
            }
        })
    },[])
    const logout = ()=>{
        handleLogout()
        .then(response=>{
            if(response.status ==='ok'){
                navigate('/login')
            }
        })
    }
  return account && <>
      <nav>
        <NavLink to="/profile" end>Profile</NavLink>
        <NavLink to="/profile/settings" end>Settings</NavLink>
        <NavLink to="/profile/albums" end>Albums</NavLink>
        <NavLink to="/profile/followers" end>Followers</NavLink>
        <NavLink to="/profile/block" end>BlockList</NavLink>
        <button onClick={logout}>Logout</button>
      </nav>
      <Outlet
        context={{account, setAccount}}
        
      />
    </>
  
};
