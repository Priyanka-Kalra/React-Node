import * as React from 'react';
import {useNavigate} from "react-router-dom";import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {AuthContext} from '../Context/AuthContext'
import {makeStyles} from '@mui/styles';
import insta from '../Assets/Instagram.JPG';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles({
    appb:{
        background : 'white'
    }
})


export default function Navbar({userData}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const {logOut} = React.useContext(AuthContext)
    const classes = useStyles()
    const navigate=useNavigate();

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleprofile = () => {
        navigate(`/profile/${userData.UserId}`)
    }
    const handlebannerclick = () => {
        navigate('/')
    }

    const handlelogout = async() => {
        await logOut()
        navigate('/login')
    }
    const handleexplore = () => {
        let win =window.open('https://en.wikipedia.org/wiki/Instagram','_blank');
        win.focus();
    }
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleprofile}><AccountCircleIcon/>&nbsp; Profile</MenuItem>
            <MenuItem onClick={handlelogout}><ExitToAppIcon/>&nbsp;&nbsp; Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleprofile}><AccountCircleIcon/><p>&nbsp;&nbsp;</p>Profile</MenuItem>
            <MenuItem onClick={handlelogout}><ExitToAppIcon/><p>&nbsp;&nbsp;</p>Logout</MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{background:'white'}} className={classes.appb}>
                <Toolbar>
                    <div style={{marginLeft:'5%'}}>
                        <img src={insta} style={{width:'20vh'}} onClick={handlebannerclick}/>
                    </div>
                    <Box sx={{ flexGrow: 1 }} />

                    {/*diff view for diff screen size*/}
                    <Box sx={{ display: { xs: 'none', md: 'flex' },color:'black',alignItems:'center',marginRight:'4rem' }}>
                        <HomeIcon onClick={handlebannerclick} sx={{marginRight:'1.5rem',cursor:"pointer"}}/>
                        <ExploreIcon onClick={handleexplore} sx={{marginRight:'1rem',cursor:"pointer"}}/>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Avatar src={userData.ProfileUrl}  sx={{height:'2rem',width:'2rem'}}/>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}