import React from 'react';
import { Admin, Resource, ListGuesser  } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:3000');
const App = () => <Admin dataProvider={dataProvider}>
    <Resource name="composers" list={ListGuesser} />
    <Resource name="scores" list={ListGuesser} />
    <Resource name="movements" list={ListGuesser} />
    <Resource name="publishers" list={ListGuesser} />
    <Resource name="recordings" list={ListGuesser} />
  </Admin>

export default App;