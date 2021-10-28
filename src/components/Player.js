import './Player.css'
import MaterialIcon from '@material/react-material-icon';

export default function Player(){
    return (
        <div className="player-container">
            <MaterialIcon icon="skip_previous" className="player-icon"/>
            <MaterialIcon icon="play_arrow" className="player-icon"/>
            <MaterialIcon icon="pause" className="player-icon"/>
            <MaterialIcon icon="skip_next" className="player-icon"/>
            <div className="music-name">Lady Gaga - You & I</div>
        </div>
    );
}