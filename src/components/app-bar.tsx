import * as React from 'react'
import { useState, useEffect, MouseEvent } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

import eventData from '../event-data' // Use for mock purposes

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
  { page: 'Log In', route: '/signIn' },
]

// List of settings and routes that are propagate through out all the sites.
const settingsAndRoutes: ISettings[] = [
  { setting: 'Profile', route: '/profile'},
  { setting: 'Account', route: '/account'},
  { setting: 'Logout', route: '/logout'}
]

const websiteName = 'Bulletin Board' // Can be change to anything.
const url = ' https://ekmqadzwwi.execute-api.us-east-1.amazonaws.com/users?user_id=1'

// AppBar Component Function
const ResponsiveAppBar = (props: { store: any }) => {

  const manager: IContextType = React.useContext(props?.store)
  const dispatch = manager.dispatch
  console.log(manager)

  const navigate = useNavigate() // react-router | utilize for jumping from one page to another.
  let urlParams = useParams() // retrieves a specific information embedded on the URL. | urlParams.user_id


  const query = new URLSearchParams(useLocation().search)
  console.log(query.get('first'))
  console.log(query.get('last'))

  // Don't know what to do make of these two states. | Straight from the react mui App Bar page.
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  // AVATAR CIRCLE | Logged in user IMAGE | Might not make it into the product
  // Substituted for users first and last initials
  const userImage = eventData[0].eventImage
  const [isUser, setUser] = useState <IUser | undefined> (undefined)



  const getUsers = async () => {
    const response = await fetch(url)
    const list = await response.json()
    // console.log(list)
    setUser(list[0])
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
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
              {pagesAndRoutes.map((page) => (
                <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={()=>{ navigate(page.route) }}>
                    {page.page}
                  </Typography>
                </MenuItem>
              ))}
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
              pagesAndRoutes.map((page) => (
                <Button
                  key={page.page}
                  onClick={()=>{ navigate(page.route) }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.page}
                </Button>
              ))
            }
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

  {/* user NAME AND IMAGE at the top right */}
                <Avatar alt={`${isUser?.first_name} ${isUser?.last_name}`} src={userImage} />

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
              {settingsAndRoutes.map((setting) => (
                <MenuItem key={setting.setting} onClick={()=>{ navigate(setting.route) }}>
                  <Typography textAlign="center">{setting.setting}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;