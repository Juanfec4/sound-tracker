import './styles/style.css';
import Header from './components/layout/header'
import UserProfile from './components/layout/userprofile'
import { useEffect, useState } from 'react';
import getToken from './helpers/getToken';
import APIService from "./services/apiService";

function App() {
  const [userData, setUserData] = useState("")
  const [token, setToken] = useState("")
  const [userDetails, setUserDetails] = useState("")
  useEffect(()=>{
    const URL = window.location.href;
    let token = getToken(URL);
    setToken(token)
  },[])

  useEffect(()=>{
    if(token.access_token){
      APIService.getTopItems('tracks', token.access_token).then((response)=> {
        setUserData(response.data.items)
      })
      APIService.getUserDetails(token.access_token).then((response)=> {
        setUserDetails(response.data)
      })
    }
  },[token])
  
  return (
    <>
    <Header/>
    <UserProfile userData={userData} userDetails={userDetails}/>
    </>
  );
}

export default App;
