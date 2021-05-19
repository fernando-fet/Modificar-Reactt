import React from 'react';
import * as s from './App.styles';
import * as Palette from './colors'

import Sidebar from './componentsNavbar/Sidebar/Sidebar';
import MainView from './componentsNavbar/MainView/MainView'



const App = () => {
  const backgroundImage = 'images/reastauran.jpg';
  const sidebarHeader = {
    fullName: 'VISTA ADMINISTRADOR',
    shortName: 'Admin'
  };


  const menuItems = [
    {name: 'DASHBOARD',  to: '/', icon: '/icons/home.svg', subMenuItems: [] },
    {name: 'USER PROFILE',     to: '/about', icon: '/icons/about.svg', subMenuItems: []},
    {name: 'Productos', to: '/destinations', icon: '/icons/destinations.svg', subMenuItems: [] },
    {name: 'Tipos_productos', to: '/blog', icon: '/icons/blog.svg', subMenuItems: [] },
  ];

  const fonts = {
    header: 'ZCOOL KuaiLe',
    menu: 'Poppins'
  }

  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.silver}
      />
      <MainView />
    </s.App>
  );
}

export default App;
