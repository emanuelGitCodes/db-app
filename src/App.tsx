import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AppState } from './user-store'
import ResponsiveAppBar from './components/app-bar'
import SignUpPage from './pages/sign-up'
import LogInPage from './pages/log-in-page'
import HomePage from './pages/home-page'
import EventPage from './pages/event-page'
import ErrorPage from './pages/error-page'

function App () {

  return(
    <>
      <AppState>
        <Router>
          <ResponsiveAppBar/>

          <Routes>
            <Route  path='/' element={<SignUpPage />} />
            <Route  path='logIn' element={<LogInPage />} />
            <Route path='home/:user_id' element={<HomePage />} />
            <Route path='event/:event_id' element={<EventPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>

        </Router>
      </AppState>
    </>
  )
}

export default App;