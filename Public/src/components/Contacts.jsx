
import React, { useState ,useEffect} from "react";
import styled from 'styled-components';
import Logo from "../assets/logo.svg"

const Contacts = ({Contacts , currentUser}) => {
    const [currentUserName, setCurrentUserName] = useState(undefined)

    useEffect(()=> {

    },[currentUser])
  return (
    
    <div>
      Contacts

    </div>
  )
}

export default Contacts
