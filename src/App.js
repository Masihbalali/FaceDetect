import './App.css';
import SigninMaterial from "./SigninMaterial"
import LoginMaterial from "./LoginMaterial"
import { BrowserRouter , Routes, Route, Switch } from "react-router-dom";
import NoPage from './NoPage';



function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
          <Route exact  path="/" element={<LoginMaterial />}/>
          <Route exact path='/signup' element={<SigninMaterial />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App;
