import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../../components/Button';
import { Loading } from '../../../../components/Loading';
import api from '../../../../utils/api';

import Image from "../Image"
 import { Container, Info, Item, Title, Wrapper, ItemContact, NameContact } from './styles';

const Details: React.FC = () => {

      interface Pet {
  
        name?: string;
        specie?: string;
        age?: string;
        description?: string; 
        image: string;
        userId?: string;
      };

      interface User {
  
        firstName?: string;
        lastName?: string;
        phoneNumber?: string;
      };


      interface PetParams {
        id: string;
      }

      const params = useParams<PetParams>();
      const [pet, setPet] = useState<Pet>();
      const [user, setUser] = useState<User>();


      useEffect(() => {
        fetch(api + "pets/" + params.id)
      .then(response => response.json())
      .then(response => {
        setTimeout(() => {
          setPet(response)
        }, 2000)
      })
      .catch(e => console.log(e));

      
      }, [params.id]);


      useEffect(() => {
        if (pet) {
        fetch(api+"users/" + pet?.userId,)
        .then((response) => response.json())
        .then((response) => {
         setUser(response);
        })
      }
      }, [pet, pet?.userId])
      
    
      if (!pet) {
        return <Loading /> ;
      }
      

  return (
    <div>
    <Image image={pet.image}></Image>
    <Wrapper>
      <Container>
        <Item>
          <Title>
          <h3>
          {pet.name}
          </h3>
          </Title>
          <Info>
          <p>
          {pet.specie}
          </p>
          <p>
          {pet.age}
          </p>
          <p>
          {pet.description}
          </p>
          </Info>
          </Item>
          <ItemContact>
            <NameContact>
              <p>{user?.firstName} {user?.lastName}</p>
            </NameContact>
            <a href={`tel:${user?.phoneNumber}`}>
            <Button width="100%" >Call {user?.phoneNumber}</Button>
            </a>
          </ItemContact>

      </Container>
      </Wrapper>
      </div>
  );
}

export default Details;