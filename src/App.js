import { BrowserRouter,Route,Routes } from "react-router-dom";
import UserLogin from "./Components/UserLogin";
import LandingPage from "./Components/LandingPage";
import MerchantLogin from "./Components/MerchantLogin"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
     <Route path="/merchant" element={<MerchantLogin/>}></Route>
      <Route path="/user" element={<UserLogin/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
