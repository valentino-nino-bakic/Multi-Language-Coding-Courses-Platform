import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />            
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <button className="btn btn-link" onClick={() => navigate('/js')}>JS</button>
                <button className="btn btn-link" onClick={() => navigate('/php')}>PHP</button>
                <button className="btn btn-link" onClick={() => navigate('/python')}>Python</button>
            </div>
        </>
    )
}


export default Home;