import "./Footer.scss";

const Footer = () => {
    return (
        <footer>
            <p>© 2021 scorchteam.com</p>
            <div><p style={{color: 'var(--pallette-electric-blue)', margin: '0 1rem 0 0', padding: 0, display: "inline"}}>{'\u2022'}</p>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            
        </footer>
    );
}

export default Footer;