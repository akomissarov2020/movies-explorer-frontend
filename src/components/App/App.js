import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Error404 from '../Error404/Error404';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';


function App(props) {

  const [currentUser, setCurrentUser] = React.useState({name: "default"});

  function toBeImplemeted() {
    setCurrentUser({});
  } 

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
              <Header onLogout={toBeImplemeted} dark={true} />
          } />
          <Route exact path="/movies" element={
              <Header onLogout={toBeImplemeted} dark={false} />
          } />
          <Route exact path="/saved-movies" element={
              <Header onLogout={toBeImplemeted} dark={false} />
          } />
          <Route exact path="/profile" element={
              <Header onLogout={toBeImplemeted} dark={false} />
          } />
          <Route exact path="/signin" element={
              <Header onLogout={toBeImplemeted} dark={false} />
          } />
          <Route exact path="/signup" element={
              <Header onLogout={toBeImplemeted} dark={false} />
          } />
        </Routes>
        <Routes>  
          <Route exact path="/" element={
              <Main />
          } />
          <Route exact path="/movies" element={
              <Movies />
          } />
          <Route exact path="/saved-movies" element={
              <SavedMovies />
          } />
          <Route exact path="/profile" element={
              <Profile />
          } />
          <Route exact path="/signin" element={
              <Login />
          } />
          <Route exact path="/signup" element={
              <Register />
          } />
          <Route exact path="*" element={
              <Error404 />
          } />
        </Routes>
        <Routes>
          <Route exact path="/" element={
              <Footer />
          } />
          <Route exact path="/movies" element={
              <Footer />
          } />
          <Route exact path="/saved-movies" element={
              <Footer />
          } />
          <Route path="/edit" element={
            <Navigate to="/profile" />
          } />
          <Route path="/signout" element={
            <Navigate to="/" />
          } />
          <Route path="/404" element={
            <Error404/>
          } />
        </Routes>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
