//Styles
import ExternalLink from '../../ui/externalLink';
import {url} from "../../../services/apiService";
import './style.css';

function Header() {
    return(
        // Login button to redirect to spotify authentication page
        <header className="header">
            <ExternalLink text={'Login'} link={url}/>
        </header>


    )

}

export default Header;