import './TopBar.css'
import './Sidebar.css'
import Player from '../Player';

export default function TopBar(){
    return(
        <div className="topbar-container">
            <Player/>
        </div>
    );
}