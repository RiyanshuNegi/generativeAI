import Header from '../component/Header'
import { useNavigate } from 'react-router-dom';
import  SimplifyrLogo from '../static/img/simplifyrLogo.svg'
import  NeuralSketchLogo from '../static/img/NeuralSketchLogo.svg'
import arrow from '../static/img/arrow.png'
import '../static/css/styles.css';




function Home() {
    const navigate = useNavigate();
    
    const imageGenRedirect = () => {
        navigate('/imageGen');
    };
    const SummaryRedirect = () => {
        navigate('/summary'); 
    };
        return (
        <>
            {/* <Header /> */}
            <div className='container'>
                {/* simplifyer */}
                <div className='SummaryContainer' >
                    <div className='logo'>
                        <img className="logoImg" alt='logo' src={SimplifyrLogo} />
                    </div>
                <div className="description">
                            <p className="boldDes">Introducing <span className="small_logo_SF"> Simplifyr </span>, your intelligent companion for effortless summarization!</p>
                        <p className="normalDes">Whether you're tackling lengthy articles, research papers, or even complex books, SummaBot is here to simplify the
                        process.</p>
                    </div>
                    
                    <button className='btn' onClick={SummaryRedirect} >Try It <img className='arrow' alt='arrow' src={arrow} /> </button>
                </div>

                {/* image generator */}
                
                <div className='ImageContainer' >
                    <div className='logo'>
                            <img className="logoImg" alt='logo' src={NeuralSketchLogo} />
                    </div>
                    <div className="description">
                            <p className="boldDes"> Introducing <span className='small_logo_NS' >NeuralSketch</span>, the ultimate text-to-image transformation bot!</p>
                        <p className="normalDes">Watch as your words transcend into visuals. With deep learning technology, NeuralSketch effortlessly brings your ideas
                        to life.</p>
                    </div>
                        <button className='btn imgBtn' onClick={imageGenRedirect}>Try It  <img className='arrow' alt='arrow' src={arrow} />  </button>
                </div>
                <Header/>
            </div>
        </>
    )
}
export default Home;



