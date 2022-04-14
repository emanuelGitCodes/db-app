import React, { useState, useEffect, MouseEvent } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Typography, Toolbar, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import eventData from '../event-data' // Use for mock purposes
import { store } from '../user-store'

// Interfaces
interface IUserData {
  logIn: boolean,
  userName: string,
  firstName: string,
  last_name: string
}

interface IContextType {
  state: IUserData,
  dispatch: React.Dispatch<{type: string, value: unknown}>
}
interface IUser {
  first_name: string,
  last_name: string,
  user_id: number
}

interface IPages {
  page: string,
  route: string
}

interface ISettings {
  setting: string,
  route: string
}

// List of pages and routes that are propagate through out all the sites.
const pagesAndRoutes: IPages[] = [
  { page: 'Home', route: '/home' },
  { page: 'Event', route: '/event' },
]

// List of settings and routes that are propagate through out all the sites.
const settingsAndRoutes: ISettings[] = [
  { setting: 'Profile', route: '/profile'},
  { setting: 'Logout', route: '/logout'}
]

const notLogInPages: IPages[] = [
  { page: 'Sign Up', route: '/' },
  { page: 'Log In', route: '/logIn' },
]

const notLogInSettings: ISettings[] = [
  { setting: 'Log In', route: '/logIn'},
]

const websiteName = 'Bulletin Board' // Can be change to anything.
const url = 'https://ekmqadzwwi.execute-api.us-east-1.amazonaws.com/users?user_id=1'
const url2 = 'https://ekmqadzwwi.execute-api.us-east-1.amazonaws.com/users?'

// *******************
const ResponsiveAppBar = () => {

  const manager: any = React.useContext(store)
  const dispatch = manager.dispatch

  const navigate = useNavigate() // react-router | utilize for jumping from one page to another.
  const query = new URLSearchParams(useLocation().search) // retrieve information from the URL
  // console.log(query.get('first'))
  // console.log(query.get('last'))

  // AVATAR CIRCLE | Logged in user IMAGE | Might not make it into the product
  // Substituted for users first and last initials
  const userImage = eventData[0].eventImage
  const [isUser, setUser] = useState <IUser | undefined> (undefined)

  // Don't know what to do make of these two states. | Straight from the react mui App Bar page.
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  let userInitials = () => {
    console.log(manager.state.userName)
    console.log(manager.state.firstName)
    console.log(manager.state.login)
    console.log( manager.state.login && manager.state.firstName !== '')
  }

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getUsers = async () => {
    const response = await fetch(url)
    const list = await response.json()
    console.log(list)
    dispatch({
      type: 'update_user', value: {
        userName: 'TEST_USER',
        firstName: list.first_name,
        lastName: list.last_name
      }
    })
    setUser(list[0])
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    userInitials()
  }, [manager.state])

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            {websiteName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* (HAMBURGER) Menu options for the appbar once it's minimize */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left', }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, }}
            >
              {
                manager.state.logIn &&  manager.state.userName !== ''
                ? pagesAndRoutes.map((page) => (
                  <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      onClick={()=>{ navigate(page.route) }}>
                      {page.page}
                    </Typography>
                  </MenuItem>
                  ))
                : notLogInPages.map((page) => (
                  <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      onClick={()=>{ navigate(page.route) }}>
                      {page.page}
                    </Typography>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>

          {/* WEBSITE Logo when appbar is minimize */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            {websiteName}
          </Typography>

          {/* Text boxes with Routes that show up when the appbar is at its largest state */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
              manager.state.logIn && manager.state.userName !== ''
              ? pagesAndRoutes.map((page) => (
                <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={()=>{ navigate(page.route) }}>
                    {page.page}
                  </Typography>
                </MenuItem>
                ))
              : notLogInPages.map((page) => (
                <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={()=>{ navigate(page.route) }}>
                    {page.page}
                  </Typography>
                </MenuItem>
              ))
            }
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

      {/* user NAME AND IMAGE at the top right */}
              {
                manager.state.logIn && manager.state.userName != ''
                ? <Avatar alt={`${manager.state?.firstName} ${manager.state?.lastName}`} >
                    { `${manager.state?.firstName[0]} ${manager.state?.lastName}` }
                  </Avatar>
                : <Avatar alt={`${manager.state?.firstName} ${manager.state?.lastName}`} src={userImage}/>
              }

              </IconButton>
            </Tooltip>

      {/* Menu options with Routes for the picture */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {
                manager.state.logIn &&  manager.state.userName !== ''
                ? settingsAndRoutes.map((setting) => (
                    <MenuItem key={setting.setting} onClick={() => navigate(setting.route) }>
                      <Typography textAlign="center">{setting.setting}</Typography>
                    </MenuItem>
                  ))
                : notLogInSettings.map((setting) => (
                    <MenuItem key={setting.setting} onClick={() => navigate(setting.route) }>
                      <Typography textAlign="center">{setting.setting}</Typography>
                    </MenuItem>
                  ))
              }
            </Menu>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;