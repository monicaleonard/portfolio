import './ScrollTop.scss';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

export default function ScrollTop() {
    return (
        <div className="ScrollTop">
            <IconButton className="iconBtn">
                <p onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><ExpandLessIcon fontSize="large" className="expBtn" /></p>
            </IconButton>
        </div>
    )
}


