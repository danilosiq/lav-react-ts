import { Column } from "../../../components/Column"
import { Row } from "../../../components/Row"
import { Navbar } from "../../../components/navbar"
import { LoginForm } from "./components/login-form"
import LoginIMG from '../../../components/assets/images/login-img.png';
import { Separator } from "../../../components/Separator";
import { Footer } from "../../../components/footer";

export function LoginScreen() {

  return (
    <>
    <Navbar/>

    <Row classname="w-full justify-evenly">

      <div className="w-[50%] ">
        <img src={LoginIMG} alt="loginIMG"  className="object-cover z-10 bg-black h-screen"/>
      </div>
      <Column classname=" px-[16px] w-[50%]">
      <h1 className="text-[100px] text-[#992A7F] font-extrabold">Login</h1>
       
        <div className="">
        <LoginForm/>
        </div>
      </Column>
      
      </Row>
 <Footer/>
    </>

  )
}


