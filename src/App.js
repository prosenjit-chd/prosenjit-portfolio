import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home/HomePage/HomePage';
import Header from './pages/Home/Header/Header';
import Footer from './pages/Home/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectDetails from './pages/Home/ProjectDetails/ProjectDetails';
import Blogs from './pages/Home/Blogs/Blogs';
import ScrollToTop from './pages/Home/ScrollToTop/ScrollToTop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header> </Header>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/project/:id">
            <ProjectDetails></ProjectDetails>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
        </Switch>

        <Footer> </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
