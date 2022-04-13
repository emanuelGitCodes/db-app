import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import { store, AppState } from './user-store'
import ResponsiveAppBar from './components/app-bar'
import SignUpPage from './pages/sign-up'
import LogInPage from './pages/log-in-page'
import HomePage from './pages/home-page'
import EventPage from './pages/event-page'
import ErrorPage from './pages/error-page'


/**
 * 1) create a [ sign-up | log in ] pages
 * 2) use PUT on sign-up
 * 3) use GET to get user's data on log in
 */

function App () {

  return(
    <>
      <AppState>
        <Router>
          <ResponsiveAppBar store={store}/>

          <Routes>
            <Route  path='/' element={<SignUpPage />} />  {/* App root */}
            <Route  path='logIn' element={<LogInPage />} />
            <Route path='home' element={<HomePage />} />

            {/* Format allows to pass data from uno url to the code. */}
            {/* Page only shows up if a user id is pass */}
            <Route path='event/:user_id' element={<EventPage />} >
              {/* <Route path=':user_id' element={<EventPage/>} /> */}
              {/* LIST format if multiple parameters are pass */}
            </Route>


            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Router>
      </AppState>
    </>
  )
}

export default App;