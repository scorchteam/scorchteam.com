import { useState, useEffect } from "react";
import "./Header.scss";
import logo from "../../images/logo/scorchteam_logo.svg";
import { useLocation } from "react-router-dom";
import { animated, useSpring } from '@react-spring/web';

const Header = (props) => {
    const tabs = ["home", "about", "projects", "contact"];
    const currentTab = useLocation().pathname;
    const [collapsed, setCollapsed] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', updateWindowDimensions);
        updateWindowDimensions();

        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        }
    }, [])

    const updateWindowDimensions = () => {
        setWidth(window.innerWidth);
    }

    const renderNavLinks = () => {
        const navLinks = tabs.map((tab) => {
            var hrefText = `/${tab}`;
            if (tab === "home") {
                hrefText = "/";
            }
            return (
                <a key={tab}
                    href={hrefText}
                    className={`navigation-link ${currentTab === hrefText ? 'active-nav' : ''}`}>
                    {tab}
                </a>
            );
        })
        return navLinks;
    }

    const isVisible = () => {
        return (width < 768 && !collapsed);
    }

    return (
        <div className="header-container">
            <header>
                <div className="container-lg header">
                    <div className="header-left-section">
                        <a href="/"><img className="header-logo" src={logo} alt="Scorch Team Logo"></img></a>
                    </div>
                    {
                        width >= 768 &&
                        <div className="header-middle-section">
                            {renderNavLinks()}
                            <a href="https://www.github.com/scorchteam" className="github-link">
                                <i className="fab fa-github"></i>
                                GitHub
                            </a>
                        </div>
                    }
                    {
                        width < 768 &&
                        <div className="header-middle-section">
                            <div className="hamburger-icon">
                                <i className="fas fa-hamburger hamburger-icon" onClick={() => { setCollapsed(!collapsed) }}></i>
                            </div>
                        </div>
                    }
                </div>
            </header>
            <div className="header-bottom-section-container">
                <animated.div
                    style={useSpring({
                        // opacity: isVisible() ? 1 : 0,
                        y: isVisible() ? 0 : -233,
                        height: isVisible() ? 233 : 0,
                        config: {
                            duration: 250
                        }
                    })}>
                    <div className={`header-bottom-section`}>

                        {renderNavLinks()}
                        <a href="https://www.github.com/scorchteam" className="github-link">
                            <i className="fab fa-github"></i>
                            GitHub
                        </a>
                    </div>
                </animated.div>
            </div>
        </div>

    );
}

export default Header;