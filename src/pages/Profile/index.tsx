import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { getCurrentUser, getProfile, logout } from "../../services/auth";
import api from "../../utils/api";

import { Container, Content, HeaderTitle, ProfileContent, ProfileHint, ProfileLogout, ProfilePair, ProfileText } from "./styles";

const Profile: React.FC = () => {

    interface Id {
        userId: string;
      }
      interface Profile {
        userId: string;
        firstName: String;
        lastName: String;
        phoneNumber: String;
        email: String;
      }

    const [currentUser, setCurrentUser] = useState<String|undefined>(undefined); // mudei aqui a tipagem, tenta evitar any :
    const user = getCurrentUser();
    const [id, setId] = useState<Id>();
    const [profile, setProfile] = useState<Profile>();
  
  
   if (!currentUser  && user) {
    setCurrentUser(user);
  }

  useEffect(() => {
    
    if (currentUser) {
      setId(getProfile() as Id)
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    if(currentUser) {

   fetch(api+"users/" + id?.userId)
   .then((response) => response.json())
   .then((response) => {
        setProfile(response);
   })
}
  }, [currentUser, id?.userId])

  const history = useHistory();

  
  const handleLogout = () => {
    setCurrentUser(undefined) // bastava mudares aqui o estado :) 
    logout();
    history.push("/");
  }
  
  return (<>
    <Container>
        <HeaderTitle>
            Hello, {profile?.firstName} {profile?.lastName} !
        </HeaderTitle>
        <Content>
            <ProfileContent>
                <div>
                  <ProfilePair>
                    <ProfileHint>
                      Name
                    </ProfileHint>
                    <ProfileText>
                    {profile?.firstName} {profile?.lastName}
                    </ProfileText>
                  </ProfilePair>
                </div>
                <div>
                  <ProfilePair>
                    <ProfileHint>
                      Email
                    </ProfileHint>
                    <ProfileText>
                    {profile?.email}
                    </ProfileText>
                  </ProfilePair>
                </div>
            </ProfileContent>

            <ProfileContent>
              <div>
                <ProfilePair>
                  <ProfileHint>
                    Phone
                  </ProfileHint>
                  <ProfileText>
                    {profile?.phoneNumber}
                    </ProfileText>
                </ProfilePair>
              </div>
            </ProfileContent>
            
            <ProfileLogout onClick={handleLogout}>Logout</ProfileLogout>
        </Content>
    </Container>
  </>);
};

export default Profile;
