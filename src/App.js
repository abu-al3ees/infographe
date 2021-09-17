import React from 'react';
import SiteContext from './context/site';

import Body from './components/todo/body'
import AuthProvider from './context/auth';
import Auth from './components/auth/auth'
import NavBar from './components/todo/header';
import Form from './components/todo/form'

export default class App extends React.Component {
  render() {
    return (
      <>
      <AuthProvider>
        <NavBar />
          <Auth capability="read">
          <SiteContext>
       <Form/>
      </SiteContext>
          </Auth>
          <Auth capability="guest">
          <Body/>
          </Auth>
         
      </AuthProvider>
    </>
    );
  }
}