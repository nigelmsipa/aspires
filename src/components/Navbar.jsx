/** @format */
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  alpha,
  Badge,
  Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatIcon from '@mui/icons-material/Chat';
import MenuIcon from '@mui/icons-material/Menu';
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItems: {
    display: 'flex',
    alignItems: 'center',
  },
  menu: {
    marginRight: theme.spacing(2),
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '50%',
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(1),
  },

  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <div className={classes.menuItems}>
          <MenuIcon className={classes.menu} />
          <Typography variant='h6' className={classes.logoLg}>
            Aspire
          </Typography>
        </div>

        <div className={classes.search}>
          <SearchIcon />
          <InputBase placeholder='Search…' className={classes.input} />
        </div>
        <div className={classes.icons}>
          <Badge badgeContent={4} color='secondary' className={classes.badge}>
            <ChatIcon />
          </Badge>
          <Badge badgeContent={4} color='secondary' className={classes.badge}>
            <NotificationsNoneIcon />
          </Badge>
          <Avatar
            alt='Nigel Msipa'
            src='https://lh3.googleusercontent.com/pw/AM-JKLUatFpylOghyXdXOofzUYCGcpi_4fpudvj5WJ9qGx6X5HXjGLCrms137QbX4lVX26ST6R_zpRoEcqy1iKeVfkZsgxVMFDhULZfQKIZWISpLnq5scopAx6E30KVfdHcg8E5wLLAfuQRqLyXLAQxAQg2JTw=w1616-h1080-no?authuser=0'
            className={classes.avatar}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
