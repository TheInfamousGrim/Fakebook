export default function Footer() {
    return (
        <footer className="login_footer">
            <div className="login_footer_wrap">
                <Link to="/">English(UK)</Link>
                <Link to="/" className="footer_square">
                    <i className="plus_icon" />
                </Link>
            </div>
            <div className="footer_splitter" />
            <div className="login_footer_wrap">
                <Link to="/">Sign Up</Link>
                <Link to="/">Log in</Link>
                <Link to="/">Privacy</Link>
                <Link to="/">Cookies</Link>
                <Link to="/">
                    AdChoices
                    <i className="adChoices_icon" />
                </Link>
                <Link to="/">Terms</Link>
                <Link to="/">Help</Link>
            </div>
            <div className="login_footer_wrap">
                <Link to="/" style={{ fontSize: '12px', marginTop: '10px' }}>
                    Fakebook © 2022
                </Link>
            </div>
        </footer>
    );
}
