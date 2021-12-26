import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import NavTop from './Pages/Shared/Navigation/NavTop';
import Navigation from './Pages/Shared/Navigation/Navigation';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Admission from './Pages/Services/Admission/Admission';
import Booking from './Pages/Services/Booking/Booking';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import Contact from './Pages/Contact/Contact';
import Classes from './Pages/Services/Classes/Classes';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
      <NavTop></NavTop>
      <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/classes" element={<Classes/>}>
          </Route>
          <Route path="/booking/:productId" element={<PrivateRoute>
            <Booking/>
          </PrivateRoute>} />
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Registration />}>
          </Route>
          <Route path="/admission" element={<Admission/>}>
          </Route>
          <Route path="/myOrder" element={<MyOrder/>}>
          </Route>
          <Route path="/contact" element={<Contact/>}>
          </Route>
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
      
    </div>
  );
}

export default App;
