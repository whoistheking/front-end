import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MainLayout from './components/common/MainLayout';
import GameRoomPage from './pages/GameRoomPage';
import WaitingRoomPage from './pages/WaitingRoomPage';
import Redirection from './pages/Redirection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<LoginPage />} />
            <Route path='/login/callback' element={<Redirection />} />
            <Route path='/main' element={<MainPage />} />
            <Route path='/gameroom/waiting' element={<WaitingRoomPage />} />
            <Route path='/gameroom/start' element={<GameRoomPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;