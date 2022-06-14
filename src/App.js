import React from 'react'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Main from './pages/Main';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} exact />
      </Routes>
    </Router>
  )
}

export default App