import React, { SyntheticEvent, useState } from "react";

import { Container, FormItem, Image, Input, Form, Button, ErrorMessage, Sugestion } from "./styles";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import { LinkStyled } from "../../components/Link";
import api from "../../utils/api";
//import { Redirect } from 'react-router-dom';

const Register: React.FC = () => {
  const history = useHistory();

  interface User {
    firstName: string;
    lastName: string;
    
    email: string;
    phoneNumber: string;
    password: string;
  }
  const initialUserState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  };
  const [user, setUser] = useState<User>(initialUserState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
 
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);



    fetch(api+"users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "firstName": user.firstName,
        "lastName": user.lastName,
        "email": user.email,
        "phoneNumber": user.phoneNumber,
        "password": user.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.firstName) {
          setLoading(false);
          history.push("/?registred=true");
        } else {
         // const errMessage = response.message;
          setLoading(false);
          setMessage("There was an error with the form");
        }
      });
  };

  return (
    <>
    <Header />

    <Container>
      <Form onSubmit={handleSubmit}>
      <FormItem>
          <Image src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/glyphs/person.svg" />
          <Input
            placeholder="First Name"
            type="firstName"
            name="firstName"
            value={user.firstName}
            required
            onChange={handleInputChange}
          />
        </FormItem>
        <FormItem>
          <Image src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/glyphs/person.svg" />
          <Input
            placeholder="First Name"
            type="lastName"
            name="lastName"
            value={user.lastName}
            required
            onChange={handleInputChange}
          />
        </FormItem>
        <FormItem>
          <Image src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/glyphs/person.svg" />
          <Input
            placeholder="Phone Number"
            type="phoneNumber"
            name="phoneNumber"
            value={user.phoneNumber}
            required
            onChange={handleInputChange}
          />
        </FormItem>
        
        <FormItem>
          <Image src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/glyphs/letter.svg" />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={user.email}
            required
            onChange={handleInputChange}
          />
        </FormItem>

        <FormItem>
          <Image src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/glyphs/lock.svg" />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={user.password}
            required
            onChange={handleInputChange}
          />
        </FormItem>
        {message && (
        <ErrorMessage>{message}</ErrorMessage>
        )}

        <Button
          type="submit"
          disabled={!user || loading }
           >
          Register
        </Button>
      </Form>
      <Sugestion>
      Have an account? <LinkStyled to="/login" >Login</LinkStyled>
        </Sugestion>
    </Container>

    </>
);
}

export default Register;
