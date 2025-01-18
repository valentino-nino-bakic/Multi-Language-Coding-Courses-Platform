import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div onClick={() => navigate('/js')}>JS</div>
            <div onClick={() => navigate('/php')}>PHP</div>
            <div onClick={() => navigate('/python')}>Python</div>
        </div>
    )
}

export default Home;