import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import SignInPage from './pages/signIn';
import HomePage from './pages/home-page';
import EventPage from './pages/event-page';
import ErrorPage from './pages/error-page';

function App (){

  const NavComponent = () => {
    return (
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/signInPage'>Sign In Page</Link>
        <Link to='/eventPage'>Event Page</Link>
      </nav>
    )
  }

  return(
    <Router>
      {/* <NavComponent /> */}
      <Routes>
        <Route  path='/' element={<HomePage/>} />  {/* App root */}

        {/* Format allows to pass data from uno url to the code. */}
        {/* Page only shows up if a user id is pass */}
        <Route path='event/:user_id' element={<EventPage/>} >
          {/* <Route path=':user_id' element={<EventPage/>} /> */}
          {/* LIST format if multiple parameters are pass */}
        </Route>

        <Route path='signIn' element={<SignInPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </Router>
  )
}

export default App;