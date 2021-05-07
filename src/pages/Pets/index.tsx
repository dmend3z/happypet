import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Category from '../../components/Category';
import Header from '../../components/Header';
import { LinkStyled } from '../../components/Link';
import ListingItem from '../../components/ListingItem';
import { Loading } from '../../components/Loading';
import * as icon from "react-icons/fa";

import {ItemPet, Items} from "../../pages/Home/styles"

import { Container, GoBack } from './styles';

const Pets: React.FC = () => {

   
    interface Pets {
        petId: string;
        name: string;
        age: string;
        specie: string;
        image: string;
      }


    interface PetParams {
        category: string;
      }

      const params = useParams<PetParams>();
      const [pets, setPets] = useState<Pets[]>([]);
      
      useEffect(() => {

        fetch("http://localhost:8080/api/pets/category?category=" + params.category.toUpperCase())
        .then((response) => response.json())
        .then((response) => {
                setPets(response.results);
        })

      }, [params.category]) 

      if (!pets) {
        return <Loading /> ;
      }

  return (
      <>
      <Header />
    <Container>
      <GoBack>

     
    <LinkStyled to="/">
                <Category ><icon.FaBackward /> Go Back</Category>
              </LinkStyled>
              </GoBack>
    <Items>
        {pets.map((pet) => {
              return (
              <ItemPet key={pet.petId}>
              <ListingItem image={pet.image} id={pet.petId} age={pet.age} specie={pet.specie} name={pet.name}></ListingItem>
              </ItemPet>
              )
            })}
            </Items>
    </Container>
    </>
  );
}

export default Pets;