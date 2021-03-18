import './ScrollTop.scss';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

export default function ScrollTop() {
    return (
        <div className="ScrollTop">
            <div className="btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <IconButton className="iconBtn" >
                    <ExpandLessIcon fontSize="large" className="expBtn" />
                </IconButton>
            </div>
        </div>
    )
}


