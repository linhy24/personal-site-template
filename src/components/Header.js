import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, Hidden, Fade } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness3Icon from '@mui/icons-material/Brightness3'; // Moon icon
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Sun icon
import GitHubIcon from '@mui/icons-material/GitHub'; // GitHub icon
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

// Create a styled Box component with responsive margin
const ToggleWrapper = styled(Box)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(-1),
    },
}));

function Header({ isDarkMode, toggleTheme }) {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" color="inherit" elevation={4} style={{ backdropFilter: 'blur(20px)', backgroundColor: theme.palette.header.main }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Your Name
                </Typography>

                <Hidden smDown>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Box mx={1}>
                            <Button color="inherit" component={Link} to="/personal-site-template/about">About Me</Button>
                        </Box>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Box mx={1}>
                            <Button color="inherit" component={Link} to="/personal-site-template/projects">Projects</Button>
                        </Box>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Box mx={1}>
                            <Button color="inherit" component={Link} to="/personal-site-template/contact">Contact</Button>
                        </Box>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Box mx={1}>
                            <Button color="inherit" startIcon={<GitHubIcon />} href="https://github.com/linhy24/personal-site-template" target="_blank" rel="noopener noreferrer">
                                View Source
                            </Button>
                        </Box>
                    </motion.div>
                </Hidden>

                <Hidden mdUp>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu style={{ borderRadius: '15px' }}
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} component={Link} to="/" style={{ justifyContent: 'center' }}>About Me</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/projects" style={{ justifyContent: 'center' }}>Projects</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/contact" style={{ justifyContent: 'center' }}>Contact</MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            component="a"
                            href="https://github.com/linhy24/personal-site-template"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ justifyContent: 'center' }}
                        >
                            <Box display="flex" alignItems="center" justifyContent="center" width="100%">
                                <GitHubIcon style={{ marginRight: '10px' }} />
                                View Source
                            </Box>
                        </MenuItem>
                    </Menu>
                </Hidden>

                <ToggleWrapper>
                    <IconButton color="inherit" onClick={toggleTheme}>
                        <Fade in={isDarkMode} timeout={300}>
                            <Brightness3Icon style={{ display: isDarkMode ? 'inline-block' : 'none' }} />
                        </Fade>
                        <Fade in={!isDarkMode} timeout={300}>
                            <WbSunnyIcon style={{ display: !isDarkMode ? 'inline-block' : 'none' }} />
                        </Fade>
                    </IconButton>
                </ToggleWrapper>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
