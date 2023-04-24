import './App.css';
import SigninMaterial from "./SigninMaterial"
import LoginMaterial from "./LoginMaterial"
import { BrowserRouter , Routes, Route, Switch } from "react-router-dom";
import NoPage from './NoPage';
import Popup from './Popup';



function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
          <Route exact  path="/" element={<LoginMaterial />}/>
          <Route exact path='/signup' element={<SigninMaterial />} />
          <Route exact path='/popup' element={<Popup />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    {/* <LoginMaterial/>
    <Popup/> */}
   </>
  )
}

export default App;
