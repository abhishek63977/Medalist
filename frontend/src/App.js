import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import User from './components/user';
import ManageTournament from './components/user/ManageTournament';
import ManageTeams from './components/user/ManageTeams';
import ManagePlayers from './components/user/ManagePlayers';
import ManageCategories from './components/user/ManageCategories';
import CreateMatch from './components/user/CreateMatch';
import ManageMatches from './components/user/ManageMatches';
import ManageScores from './components/user/ManageScore';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Navigate to="/main/home" />} />
          <Route path="main" element={<Main />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
          <Route path="user" element={<User />}>
            <Route path='managetournament' element={<ManageTournament />} />
            <Route path='manageteams' element={<ManageTeams />} />
            <Route path='manageplayers' element={<ManagePlayers />} />
            <Route path='managecategories' element={<ManageCategories />} />
            <Route path='creatematch' element={<CreateMatch />} />
            <Route path='managematches' element={<ManageMatches />} />
            <Route path='manageplayers' element={<ManagePlayers />} />
            <Route path='managescores' element={<ManageScores />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;