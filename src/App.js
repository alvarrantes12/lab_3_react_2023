import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Create from './pages/Create';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/create' exact element={<Create />} />
          <Route path='/edit/:id' exact element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
