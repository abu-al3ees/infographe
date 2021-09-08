import React from 'react';
import SiteContext from './context/site';

import Body from './components/todo/body'
import AuthProvider from './context/auth';
import Auth from './components/auth/auth'
import NavBar from './components/todo/header';

export default class App extends React.Component {
  render() {
    return (
      <>
      <AuthProvider>
        <NavBar />
          <Auth capability="read">
          <SiteContext>
        <Body/>
      </SiteContext>
          </Auth>
          <Auth capability="guest">
         
          </Auth>
         
      </AuthProvider>
    </>
    );
  }
}