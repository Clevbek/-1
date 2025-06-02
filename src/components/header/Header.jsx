import './header.css'

const Header = () => {
    return (
        <header className='main-header'>
            <div className='logo-header'>
                <h2>Castaway</h2>
            </div>
            <nav className='links-header'>
                <li>Home</li>
                <li>Episodes</li>
                <li>About</li>
                <li>Contact</li>
            </nav>
        </header>
    );
}

export default Header;
