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

// Animation de transition pour le menu burger
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

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
                    <Toolbar>
                        <IconButton className="menuButton">
                            <MenuIcon onClick={handleClickOpen} />
                        </IconButton>
                        <p 
                            className="logo" 
                            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                        >
                            <img src={logo} className="logo-img" alt="logo" />
                        </p>
                
                        <Dialog  
                            className="boiteDialogue" 
                            PaperProps={{
                              style: {
                                backgroundColor: "rgb(255, 233, 248)",
                                boxShadow: "none"
                              },
                            }}
                            fullScreen open={open} 
                            onClose={handleClose} 
                            bodyStyle={{backgroundColor: 'rgb(255, 233, 248)'}}
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
                                <ListItem button>
                                    <a href="#_" onClick={btnAPM}>À propos de moi</a>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <a href="#_" onClick={btnP}>Mes projets</a>
                                </ListItem>
                            </List>
                        </Dialog>
                    </Toolbar>
                </div>
            </Fade>
        </div>
    )
}
