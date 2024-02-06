import './Home.css';
import CasinoIcon from '@mui/icons-material/Casino';
import TurnoHomeScreen from "../TurnoHomeScreen.png"
import TurnoHomeScreen2 from "../TurnoHomeScreen2.png"


function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <div className="home-title-dice">
            <h1 className="home-title">turno</h1>
            <CasinoIcon className="home-dice" fontSize="default"/>
          </div>
          <h4 className="home-subtitle">
            Make every chore feel like a <b>turn</b>, not a <b>toil</b>.
          </h4>
          <p className="home-subtitle2">
            From the Portuguese word for shift, or round, and the idea of it being your turn. 
            <b><i> Turno. </i></b> 
            Your turn to roll the die and take agency of 
            your life. 
          </p>
        </div>
        <div className="iphone-image-container">
          <img src={TurnoHomeScreen2} alt="Turno Home Screen" className="iphone-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
