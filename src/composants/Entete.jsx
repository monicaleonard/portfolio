import React from 'react';
import './Entete.scss';
import Fade from 'react-reveal/Fade';
import logo from '../images/logo5.png';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
//import GitHubIcon from '@mui/icons-material/GitHub';

// Animation de transition pour le menu burger
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const monstyle = {
    //color: "white",
    margin: "5%"
  };

  const style = {
      position: "absolute",
      right: "5px",
      textAlign: "right"
  }

export default function Entete(){

    // Variable utiliser pour l'ouverture du menu
    const [open, setOpen] = React.useState(false);
     // Ouverture du menu
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    // Fermeture du menu
    const handleClose = () => {
        setOpen(false);
    };

    // Défiler la page à la section et fermeture du menu
    const btnAPM = () => {
        handleClose();
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
    };

    // Défiler la page à la section et fermeture du menu
    const btnP = () => {
        handleClose();
        window.scrollTo({top: window.innerHeight*2, behavior: 'smooth'});
    }

    return(
        <div className="Entete">
            <Fade top>
                <div className="contenu">
                    <p
                        className="logo" 
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    >
                        <img src={logo} className="logo-img" alt="logo" />
                    </p>
                    <MenuIcon className="menuButton" onClick={handleClickOpen} />
                        
                
                    <Dialog  
                        className="boiteDialogue" 
                        PaperProps={{
                            style: {
                                backgroundColor: "rgb(255, 233, 248)",
                                boxShadow: "none",
                                height: "100vh"
                            },
                        }}
                        fullScreen open={open} 
                        onClose={handleClose} 
                        TransitionComponent={Transition}
                    >
                        
                        <Toolbar>
                            <IconButton 
                                edge="start" 
                                color="inherit" 
                                onClick={handleClose} 
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                        <List>
                            <ListItem style={monstyle} button>
                                <h1 href="#_" onClick={btnAPM}>À propos de moi</h1>
                            </ListItem>
                            <Divider />
                            <ListItem style={monstyle} button>
                                <h1 href="#_" onClick={btnP}>Mes projets</h1>
                            </ListItem>
                            <h3 style={style}>leonardmonica17@gmail.com</h3>
                        </List>
                    </Dialog>
                </div>
            </Fade>
        </div>
    )
}
