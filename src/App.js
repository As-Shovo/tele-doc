import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/SharePage/Header/Header';
import Footer from './Pages/SharePage/Footer/Footer';
import ActiveDoc from './Pages/ActiveDoc/ActiveDoc';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contaxt/AuthProvider';
import DetailsServices from './Pages/Home/Services/DetailsService/DetailsServices';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:id">
              <DetailsServices></DetailsServices>
            </PrivateRoute>
            <Route path="/activeDoctors">
              <ActiveDoc></ActiveDoc>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
