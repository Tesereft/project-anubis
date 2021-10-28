import MaterialIcon from "@material/react-material-icon";
import "./SearchBar.css";

export default function SearchBar(){
    return (
        <div className="topbar">
            <div className="searchbar-container">
                <div class="search-box">
                    <input id="searchbar" autocomplete="false" type="text" className="searchbar-input" placeholder="Search..."/>
                    <div className="search-button">
                        <MaterialIcon icon="search" className="search-icon"/>
                    </div>
                </div>
                <div className="result-box">
                </div>
            </div>
        </div>
    );
}