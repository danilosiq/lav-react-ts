
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./features/pages/Home/screen";
import { LoginScreen } from "./features/pages/Login/screen";
import { SignInScreen } from "./features/pages/cadastre/screen";
import { ServiceScreen } from "./features/pages/roupas/screen";
import { Buycamp } from "./features/pages/buycamp/screen";
import { Terms } from "./features/pages/termos/screen";


function App() {

  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/cadastro" element={<SignInScreen/>}/>
        <Route path="/servico" element={<ServiceScreen/>}/>
        <Route path="/compra" element={<Buycamp/>}/>
        <Route path="/terms" element={<Terms/>}/>
        
      
      </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
