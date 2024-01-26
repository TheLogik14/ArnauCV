import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import user from './User.svg'
import './App.css';
import Estudis from './components/Estudis';
import Experiencia from './components/Experiencia';
import Info from './components/Info';
import Idiomes from './components/Idiomes';
import Habilitats from './components/Habilitats';
import Prefil from './components/Prefil';
import Contacte from './Contacte';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='conteiner' >
      <Navbar/>
      <div className="container" id="App">
        <div className="row">
          <div className="col-12 col-md-4 col-xl-2 bd-sidebar ">
          <img src={user}  width="200" height="200" class="img-fluid text-left" alt=""></img>
          </div>
          <div className="col">
            <br/>
            <br/>
            <h1>Arnau Molas Sagué</h1>
            <hr size='20'/>
            <Contacte/>
            <hr size='20'/>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 col-xl-2 bd-sidebar text-left">
          <Idiomes/>
          </div>
          <div className="col">
            <Estudis/>
            <hr size='20'/>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 col-xl-2 bd-sidebar">
          <Prefil/>
          </div>
          <div className="col">
          <Experiencia/>
          <hr size='20'/>
          <Info/>  
          <hr size='20'/>
          <Habilitats/>

          </div>
        </div>
      </div>     
    </div>
  </div>

  );
}

export default App;
