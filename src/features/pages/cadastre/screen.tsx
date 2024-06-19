import { Column } from "../../../components/Column"
import { Row } from "../../../components/Row"
import { Navbar } from "../../../components/navbar"
import { CadForm } from "./components/cad-form"
import SignIMG from '../../../components/assets/images/sign-in-img.png'
import { Footer } from "../../../components/footer"




export function SignInScreen() {

  return (
    <>
    <Navbar/>
    <Row classname="w-full justify-evenly">
    <Column classname=" px-[16px] w-[50%]">
      <h1 className="text-[100px] text-[#992A7F] font-extrabold">Cadastre-se</h1>
       
        <div className="ml-[50px] w-ful">
        <CadForm/>
        </div>
      </Column>
      <div className="w-[50%] ">
        <img src={SignIMG} alt="loginIMG"  className="object-cover z-10 bg-black h-screen"/>
      </div>
      
      </Row>
    <Footer/>
    </>
  )
}


