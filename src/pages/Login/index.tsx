import React, { SyntheticEvent, useState } from 'react';
import Header from "../../components/Header";
import {  Redirect } from 'react-router-dom';


import { Container, FormItem, Image, Input, Form, Button, ErrorMessage, Sugestion } from "./styles";
import { LinkStyled } from '../../components/Link';



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

        setMessage('');
        setLoading(true);

        const data = {
          email: email,
          password: password
      };
        
      fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
        .then((response) => {
            if(response.token){ 
              localStorage.setItem("user", JSON.stringify(response));
          setRedirect(true);
          } else {
            const errMessage = response.message;
            setLoading(false);
            setMessage(errMessage);
          }
            
        });

        
      }
    
      if (redirect) return <Redirect to='/' />

  return (
      <>
      <Header />

      <Container>
        <Form onSubmit={onSubmit}>
          <FormItem>
            <Image src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/glyphs/letter.svg" />
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormItem>

          <FormItem>
            <Image src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/glyphs/lock.svg" />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              required
                onChange={(e) => setPassword(e.target.value)}
            />
          </FormItem>
          {message && (
          <ErrorMessage>{message}</ErrorMessage>
          )}

          <Button
            type="submit"
            disabled={!email || !password  || loading }
             >
            Sign In
          </Button>
        </Form>
        <Sugestion>
            New to Happy Pet? <LinkStyled to="/register" >Register</LinkStyled>
        </Sugestion>
      </Container>
     

      </>
  );
}

export default Login;
