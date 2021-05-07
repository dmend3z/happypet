import React, { ReactNode } from 'react';

import { AiOutlineClose } from "react-icons/ai";

 import { Filter, FilterTitle,Container } from './styles';

 export interface CategoryProps {
   close?: boolean;
  onClick?(): void;
  children?: ReactNode;
}


const Category: React.FC<CategoryProps> = ({
  close,
  onClick,
  ...CategoryProps
}) => {
  return (
    <Container>
    <Filter>
      <FilterTitle  onClick={onClick} >
      {CategoryProps.children} {close ? < AiOutlineClose /> : ""}
      </FilterTitle>
    </Filter>
    </Container>
  );
}

export default Category;