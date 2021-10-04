
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Course from './Components/Course/Course';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Tutors from './Components/Tutors/Tutors';

function App() {
  return (
      <BrowserRouter>
      <Link to="/notfound">Also Will Not Match</Link>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Course></Course>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/tutors">
            <Tutors></Tutors>
          </Route>
          <Route path = "/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
  );
}

export default App;
