import "./Header.scss";
import logo from "../../images/logo/scorchteam_logo.svg";
import { useLocation } from "react-router-dom";

const Header = (props) => {
    const tabs = ["home", "about", "projects", "contact"];
    const currentTab = useLocation().pathname;

    const renderNavLinks = () => {
        const navLinks = tabs.map((tab) => {
            var hrefText = `/${tab}`;
            if (tab === "home") {
                hrefText = "/";
            }
            return (
                <a  key={tab}
                    href={hrefText}
                    className={`navigation-link ${currentTab === hrefText ? 'active-nav' : ''}`}>
                    {tab}
                </a>
            );
        })
        return navLinks;
    }

    return (
        <header>
            <div className="container-lg header">
                <div className="header-left-section">
                    <a href="/"><img className="header-logo" src={logo} alt="Scorch Team Logo"></img></a>
                </div>
                <div className="header-middle-section">
                    {renderNavLinks()}
                    <a href="https://www.github.com/scorchteam" className="github-link">
                        <i class="fab fa-github"></i>
                        GitHub
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;