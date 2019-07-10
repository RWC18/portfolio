import React from 'react'
import { BrowserRouter } from 'react-router-dom';

// components
import Root from './Containers/Root/Root';

const  App = () => {
  return (
      <BrowserRouter>
        <Root/>
      </BrowserRouter>
  );
}

export default App;
