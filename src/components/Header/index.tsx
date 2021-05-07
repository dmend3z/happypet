import React, {useEffect, useState} from "react";
import { Container, TextLogout } from './styles';
import logo from '../../images/logo.svg';
import Button from '../Button';
import {LinkStyled} from '../Link';
import {getCurrentUser, getProfile} from "../../services/auth";


interface HeaderProps {
  background?: string;
}

function Header(props: HeaderProps) {



  interface Profile {
    firstName: String;
  }


  const [currentUser, setCurrentUser] = useState<String|undefined>(undefined); // mudei aqui a tipagem, tenta evitar any :
  const user = getCurrentUser();
  const [profile, setProfile] = useState<Profile>();


 if (!currentUser  && user) {
  setCurrentUser(user);
}




  useEffect(() => {
    
    if (currentUser) {
      setProfile(getProfile() as Profile)
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <LinkStyled to="/">
       <img src={logo} alt="Logo Happy Pet" />
       </ LinkStyled>
       {currentUser ? (
         <div>
           <LinkStyled to="/profile">
         <TextLogout >{profile?.firstName}</TextLogout>
         </LinkStyled>
         <LinkStyled to="pets/create/">
         <Button width="128px">Create Pet</Button>
         </LinkStyled>
        </div>
       ) : (
        <LinkStyled to="/login"> 
        <Button width="100%">Login</Button>
        </LinkStyled>
       )}
    </Container>
  );
};

export default Header;
