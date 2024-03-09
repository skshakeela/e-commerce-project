import { BrowserRouter,Route,Routes } from "react-router-dom";
import UserLogin from "./Components/UserLogin";
import LandingPage from "./Components/LandingPage";
import MerchantLogin from "./Components/MerchantLogin"
import 'bootstrap/dist/css/bootstrap.min.css';
import MerchantSignup from "./Components/MerchantSignup";
import MerchantHomePage from "./Components/MerchantHomePage";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
     <Route path="/merchant" element={<MerchantLogin/>}></Route>
      <Route path="/user" element={<UserLogin/>}></Route>
      <Route path="/merchantsignup" element={<MerchantSignup/>}></Route>
      <Route path="/merchanthomepage" element={<MerchantHomePage/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
