
import { Link } from 'react-router-dom';



const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/js" className="nav-link">JS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/php" className="nav-link">PHP</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/python" className="nav-link">Python</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



export default Navbar;
