import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator} from '@aws-amplify/ui-react';
//import { AmplifySignOut } from '@aws-amplify/ui-react-v1';


function App({signOut}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Benvenuti nella mia applicazione!
        </p>
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);

