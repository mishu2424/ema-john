
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Orderreview from './components/Orderreview/Orderreview';
import Privateroute from './components/Privateroute/Privateroute';
import Register from './components/Register/Register';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Orderreview></Orderreview>
          </Route>
          <Privateroute path="/Reviews">
            <Review></Review>
          </Privateroute>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
