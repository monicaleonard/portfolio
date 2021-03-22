import React from 'react';
import './Entete.scss';
import Fade from 'react-reveal/Fade';
import logo from '../images/logo5.png';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function Entete(){
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <div className="Entete">
        <Fade top>
          <div className="contenu">
            <Toolbar>
              <IconButton className="menuButton" onClick={handleClick}>
                <MenuIcon />
              </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              <p className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><img src={logo} className="logo-img" alt="logo" /></p>
              <a href="#_" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>À propos de moi</a>
                <a href="#_" onClick={() => window.scrollTo({top: window.innerHeight*2, behavior: 'smooth'})}>Mes projets</a>
            </Toolbar>
          </div>

            
            </Fade>
        </div>
    )
}
