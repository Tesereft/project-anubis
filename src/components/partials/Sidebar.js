
import './Sidebar.css';
import MaterialIcon from '@material/react-material-icon';

export default function Sidebar(){

    return (
        <div className="sidebar-container">
        <div class='sidebar image logo'>
        </div>
        <div class='sidebar image userIconBox'>
            <MaterialIcon icon="account_circle" className="userIcon"/>
        </div>
        <div class='sidebar button'>
            <MaterialIcon icon="home" className="icones"/>
        </div>
        <div class='sidebar button'>
            <MaterialIcon icon="account_box" className="icones"/>
        </div>
        <div class='sidebar button'>
            <MaterialIcon icon="offline_bolt" className="icones"/>
        </div>
        <div class='sidebar button'>
            <MaterialIcon icon="bookmark" className="icones"/>
        </div>
        <div class='sidebar button'>
            <MaterialIcon icon="inbox" className="icones"/>
        </div>
        <div class='sidebar button'>
            <MaterialIcon icon="group" className="icones"/>
        </div>
        <div class='sidebar button sidebar-chats'>
            <MaterialIcon icon="supervised_user_circle" className="icones"/>
        </div>
        </div>
    );
}
