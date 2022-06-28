import './App.css';
// import Data from './pages/Data';
import Footer from './components/Footer';
import Pages from './pages/Pages';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Pages/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
