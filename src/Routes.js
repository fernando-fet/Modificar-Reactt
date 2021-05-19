import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Dashboar from './componentsNavbar/MainView/Dashboar/Dashboar';
import About from './componentsNavbar/MainView/About/Product/Productos';
import Categorias from './componentsNavbar/MainView/About/Product/Categorias';
import Destinations from './componentsNavbar/MainView/Destinations/Destinations';
import Country from './componentsNavbar/MainView/Destinations/Country/Country'
import Blog from './componentsNavbar/MainView/Blog/Blog';
import Services from './componentsNavbar/MainView/Services/Services';
import Contacts from './componentsNavbar/MainView/Contacts/Contacts';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Dashboar} />
      <Route exact path='/about/:Product' component={About} />
      <Route exact path='/Categoria' component={Categorias} />
      <Route exact path='/destinations' component={Destinations} />
      <Route exact path='/destinations/:country' component={Country} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/contacts' component={Contacts} />
    </Switch>
  )
}

export default Routes