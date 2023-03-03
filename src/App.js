/*import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator} from '@aws-amplify/ui-react';
//import { AmplifySignOut } from '@aws-amplify/ui-react-v1'; da provare a implementare
import { Seafarer } from './models';

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

export default withAuthenticator(App);*/

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { getSeafarer } from './graphql/queries';
import { Seafarer } from './models';

function App({ signOut }) {
  const [seafarer, setSeafarer] = useState(null);

  useEffect(() => {
    async function fetchSeafarer() {
      try {
        const response = await API.graphql({
          query: getSeafarer,
          variables: { id: '64cb43e7-ded0-40dd-9175-8cfcf09e0ca8' } // replace with actual seafarer ID
        });
        const seafarerData = response.data.getSeafarer;
        setSeafarer(seafarerData);
      } catch (error) {
        console.log('Error fetching seafarer', error);
      }
    }
    fetchSeafarer();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Benvenuti nella mia applicazione!
        </p>
        {seafarer ? (
          <div>
            <h2>{seafarer.name} {seafarer.surname}</h2>
            <p>Età: {calculateAge(seafarer.date_of_birth)}</p>
            <p>Codice fiscale: {seafarer.fiscal_code}</p>
            <p>Luogo di nascita: {seafarer.birth_place}</p>
            <p>Data di registrazione: {new Date(seafarer.date_of_registration).toLocaleDateString()}</p>
            <p>Compagnia marittima: {seafarer.maritime_compartment}</p>
            <p>Nazionalità: {seafarer.nationality}</p>
            <p>Sesso: {seafarer.gender}</p>
            <p>Numero di passaporto: {seafarer.passport_number}</p>
            <p>Numero di registrazione: {seafarer.registration_number}</p>
            <p>Indirizzo: {seafarer.address}, {seafarer.city_of_residence} ({seafarer.zip_code})</p>
            <p>Telefono: {seafarer.telephone_number}</p>
            <p>Email: {seafarer.username}</p>
            <p>Tipo di abbonamento: {seafarer.subscription_type}</p>
            <p>Data di creazione: {new Date(seafarer.createdAt).toLocaleString()}</p>
            <p>Data di ultima modifica: {new Date(seafarer.updatedAt).toLocaleString()}</p>
            <img src={seafarer.profile_image} alt="Foto profilo" />
          </div>
        ) : (
          <p>Loading seafarer data...</p>
        )}
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

function calculateAge(birthday) { // Funzione per calcolare l'età dal giorno di nascita
    const ageDiff = Date.now() - new Date(birthday);
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default withAuthenticator(App);



