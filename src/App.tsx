import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './components/Formulario';

function App() {
  return (

    <BrowserRouter>
      <RecoilRoot>
        <Route path="/" element={Formulario} />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
