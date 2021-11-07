import MaterialIcon from "@material/react-material-icon";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./SearchBar.css";

export default function SearchBar(){
    return (
        <div className="topbar">
            <InputGroup className="mb-6">
                <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
                <InputGroup.Text><MaterialIcon icon="search" className="search-icon"/></InputGroup.Text>
            </InputGroup>
        </div>
    );
}