import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import useApi from './hooks/useApi';
import Login from './paginas/login';
import Planificador from './paginas/Planificador';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/planificador" element={<Planificador />} /> {/* Agrega esta línea */}

      </Routes>
    </Router>
  );
};

export default App;