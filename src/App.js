import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/services/Services';
import AuthProvider from './context/AuthProvider'
import ServiceDetail from './components/serviceDetail/ServiceDetail';
import NotFound from './components/NotFound/NotFound';
import BookOrder from './components/BookOrder/BookOrder';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddNewService from './components/AddNewService/AddNewService';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/services/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/bookOrder/:id">
              <BookOrder></BookOrder>
            </PrivateRoute>
            <PrivateRoute path="/MyOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/addNewService">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

            {/* <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute> */}
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
