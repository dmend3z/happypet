import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import GlobalStyle from './styles/global-styles';
import Home from './pages/Home';
import Pet from './pages/Pet';
import Login from './pages/Login';
import CreatePet from './pages/CreatePet';
import Profile from './pages/Profile';
import Pets from './pages/Pets';
import Register from './pages/Register';
import Header from './components/Header';

// import { Container } from './styles';

const App = () => {
  return (
    
      <BrowserRouter>
      <GlobalStyle />
      <Header />
        <Switch>  
          <Route path="/" exact component={Home} />
          <Route path="/login"  component={Login} />
          <Route path="/pet/:id" component={Pet}/>
          <Route path="/pets/create" component={CreatePet}/>
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/pets/category/:category" component={Pets} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;