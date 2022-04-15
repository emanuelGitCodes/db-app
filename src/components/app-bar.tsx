import React, { useState, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Typography, Toolbar, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { store } from '../user-store'

// Interfaces
interface IPages {
  page: string,
  route: string
}

interface ISettings {
  setting: string,
  route: string
}

const notLogInPages: IPages[] = [
  { page: 'Sign Up', route: '/' },
  { page: 'Log In', route: '/logIn' },
]

const notLogInSettings: ISettings[] = [
  { setting: 'Log In', route: '/logIn'},
]

const websiteName = 'Bulletin Board' // Can be change to anything.

const ResponsiveAppBar = () => {

  const manager: any = React.useContext(store)
  const dispatch = manager.dispatch

  const navigate = useNavigate() // react-router | utilize for jumping from one page to another.

  // List of pages and routes that are propagate through out all the sites.
const pagesAndRoutes: IPages[] = [
  { page: 'Home', route: `/home/${manager.state.userId}` },
  { page: 'Event', route: `/event/${manager.state.userId}` },
]

// List of settings and routes that are propagate through out all the sites.
const settingsAndRoutes: ISettings[] = [
  { setting: 'Profile', route: '/profile'},
  { setting: 'Logout', route: '/logout'}
]

  // Don't know what to do make of these two states. | Straight from the react mui App Bar page.
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

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
              {`${manager.state?.firstName}  |`}
              {/* user Initials OR IMAGE at the top right */}
              {
                manager.state.logIn && manager.state.userName !== ''
                ? <Avatar
                    sx={{ bgcolor: '#0d47a1' }}
                    alt={`${manager.state?.firstName} ${manager.state?.lastName}`}
                  >
                    { `${manager.state?.firstName[0]} ${manager.state?.lastName[0]}` }
                  </Avatar>
                : <Avatar alt={`${manager.state?.firstName} ${manager.state?.lastName}`}/>
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
                    <MenuItem key={setting.setting} onClick={() => navigate(setting.route)}>
                      <Typography textAlign="center">{setting.setting}</Typography>
                    </MenuItem>
                  ))
                : notLogInSettings.map((setting) => (
                    <MenuItem key={setting.setting} onClick={() => navigate(setting.route)}>
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