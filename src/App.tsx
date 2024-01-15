import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MainLayout from './components/common/MainLayout';
import GameRoomPage from './pages/GameRoomPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<LoginPage />} />
            <Route path='/main' element={<MainPage />} />
            <Route path='/gameroom' element={<GameRoomPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;