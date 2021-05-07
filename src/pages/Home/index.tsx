import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Wrapper } from '../CreatePet/styles';
import ListingItem from '../../components/ListingItem';
import Category from '../../components/Category';
import { Categories, NextPage, Pagination, LastPage, Items, ItemPet } from './styles';
import { LinkStyled } from '../../components/Link';
import * as icon from "react-icons/fa";
import api from '../../utils/api';

interface Pets {
  petId: string;
  name: string;
  age: string;
  specie: string;
  image: string;
}

interface Page {
  currentPage: string;
}


const Home = () => {

  const [pets, setPets] = useState<Pets[]>([]);
  const [page, setPage] = useState<Page>({
    currentPage: "0",

  });

 const handleNextPage = () => {
   let current = parseInt(page.currentPage) + 1;
   let result = current.toString();
   setPage({currentPage: result})
 }

 const handleLastPage = () => {
   if (parseInt(page.currentPage) !== 0) {
    let current = parseInt(page.currentPage) - 1;
    let result = current.toString();
    setPage({currentPage: result})
   }
  
}

  useEffect(() => {
  fetch(api + "pets?size=6&page=" + page.currentPage)
  .then((response) => response.json())
  .then((response) => {
      setPets(response.results);

  })
}, [page.currentPage]);



if (!pets) {
  return <Loading /> ;
}
  return (
      <div>
          <Header></Header>
          
          <Wrapper>
            <Categories>
              <LinkStyled to="/pets/category/cat">
                <Category ><icon.FaCat /> Cat</Category>
              </LinkStyled>
              <LinkStyled to="/pets/category/dog">
                <Category><icon.FaDog /> Dog</Category>
              </LinkStyled>
              <LinkStyled to="/pets/category/bird">
                <Category><icon.FaEarlybirds /> Bird</Category>
              </LinkStyled>
              <LinkStyled to="/pets/category/farm">
                <Category><icon.FaTractor /> Farm</Category>
              </LinkStyled>
              <LinkStyled to="/pets/category/horse">
                <Category><icon.FaHorse /> Horse</Category>
              </LinkStyled>
              <LinkStyled to="/pets/category/fish">
                <Category><icon.FaFish /> Fish</Category>
              </LinkStyled>
          
          </Categories>

          <Items>
            {pets.map((pet) => {
              return (
              <ItemPet key={pet.petId}>
              <ListingItem image={pet.image} id={pet.petId} age={pet.age} specie={pet.specie} name={pet.name}></ListingItem>
              </ItemPet>
              )
            })}
            </Items>
            <Pagination>
            <LastPage onClick={handleLastPage}>Last</LastPage>
            <NextPage onClick={handleNextPage}>Next</NextPage>
            </Pagination>
          </Wrapper>
      </div>
  );
}

export default Home;