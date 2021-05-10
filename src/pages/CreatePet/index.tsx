import React, { SyntheticEvent, useState } from "react";

import { Container, ErrorMessage, Wrapper } from "./styles";
import { StyledInput, Label, FormItem } from "../../components/Input";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { StyledSelect } from "../../components/Select";
import api from "../../utils/api";
//import { Redirect } from 'react-router-dom';

const CreatePet: React.FC = () => {
  const history = useHistory();

  interface Pet {
    name: string;
    specie: string;
    age: string;
    gender: string;
    image: string;
    description: string;
  }
  const initialPetState = {
    name: "",
    specie: "",
    age: "",
    gender: "",
    image: "",
    description: "",
  };
  const [pet, setPet] = useState<Pet>(initialPetState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setPet({ ...pet, [name]: value });
 
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    const data = {
      name: pet.name,
      specie: pet.specie,
      age: pet.age,
      gender: pet.gender,
      image: pet.image,
      description: pet.description,
    };

    const user = JSON.parse(localStorage.getItem("user")!);

    fetch(api+ "pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.active) {
          setLoading(false);
          history.push("/?created=true");
        } else {
         // const errMessage = response.message;
          setLoading(false);
          setMessage("There was an error with the form");
        }
      });
  };

  return (
    <>
      <Wrapper>
        <Container>
          <form onSubmit={handleSubmit}>
            <FormItem>
              <Label>Name</Label>
              <StyledInput
                name="name"
                value={pet.name}
                onChange={handleInputChange}
              />
            </FormItem>

            <FormItem>
              <Label>Specie</Label>
              <StyledSelect defaultValue={'DEFAULT'} name="specie" onChange={handleInputChange}>
              <option value="DEFAULT" disabled >Choose specie...</option>
                <option value="CAT">CAT</option>
                <option value="DOG">DOG</option>
                <option value="BIRD">BIRD</option>
                <option value="FARM">FARM</option>
                <option value="HORSE">HORSE</option>
                <option value="FISH">FISH</option>
              </StyledSelect>
            </FormItem>

            <FormItem>
              <Label>Age</Label>
              <StyledSelect defaultValue={'DEFAULT'} name="age" onChange={handleInputChange}>
              <option value="DEFAULT" disabled >Choose age...</option>
                <option value="BABY">Baby</option>
                <option value="YOUNG">Young</option>
                <option value="ADULT">Adult</option>
                <option value="SENIOR">Senior</option>
              </StyledSelect>
            </FormItem>

            <FormItem>
              <Label>Gender</Label>
              <StyledSelect defaultValue={'DEFAULT'} name="gender" onChange={handleInputChange}>
              <option value="DEFAULT" disabled >Choose gender...</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </StyledSelect>
            </FormItem>

            <FormItem>
              <Label>Image</Label>
              <StyledInput
                name="image"
                value={pet.image}
                onChange={handleInputChange}
              />
            </FormItem>

            <FormItem>
              <Label>Description</Label>
              <StyledInput
                name="description"
                value={pet.description}
                onChange={handleInputChange}
              />
            </FormItem>

            {message && <ErrorMessage>{message}</ErrorMessage>}
            <Button width="100%" type="submit" disabled={!pet || loading}>
              Create Pet
            </Button>
          </form>
        </Container>
      </Wrapper>
    </>
  );
};

export default CreatePet;
