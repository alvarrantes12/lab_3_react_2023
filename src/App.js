import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home';
import EditMovie from './pages/EditMovie';
import DeleteMovie from './pages/DeleteMovie';
import CreateMovie from './pages/CreateMovie';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/delete' exact element={<DeleteMovie/>} />
          <Route path='/edit' exact element={<EditMovie/>} />
          <Route path='/create' exact element={<CreateMovie/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
