import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home/HomePage/HomePage';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import Header from './pages/Home/Header/Header';
import Footer from './pages/Home/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header> </Header>
      <HomePage></HomePage>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
