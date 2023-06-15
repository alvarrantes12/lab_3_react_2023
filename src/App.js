import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './pages/Home';
import CreateMovie from './pages/CreateMovie';
import EditMovie from './pages/EditMovie';
import DeleteMovie from './pages/DeleteMovie';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/create' exact element={<CreateMovie />} />
          <Route path='/edit' exact element={<EditMovie />} />
          <Route path='/delete' exact element={<DeleteMovie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;