import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_SALATS = gql`
  {
    salats {
      id
      name
      type
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_SALATS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.salats.map(({ id, name, type }: any) => (
    <div className="App">
      <header className="App-header">
      <div key={id}>
      <h3>{name}</h3>
      <p>{type}</p>
      <br />
      </div>
    </header>
    </div>
  ));
}

export default App;
