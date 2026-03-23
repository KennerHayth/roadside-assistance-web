import Button from "./Button"
import { useNavigate } from "react-router-dom"

export default function Banner(){
    const navigate = useNavigate()
    return(
    <div style={{
        position: "absolute",
        top:"0",
        left: "0",
        width: "100vw",
        zIndex: 1000,
        backgroundImage: "linear-gradient(to bottom, #1b1815, #71797E 80%)",
        borderBottom: "solid",
        borderBottomColor: "black",
        padding: "30px 40px",
        fontFamily: "'Cinzel', serif",
        
    }}> 
    <div style = {{flex: 1}}>
    <img src="/LOGO_transparent.PNG" alt= "Highway Heros Logo" style={{width: "150px", left: "40px", height:"auto",position: "absolute"}}/>
      </div> 
      <div style = {{flex: 1, display:"flex", justifyContent: "center", gap:"24px"}}>
        <Button label="Home" onClick={()=> navigate("/")} variant="primary"/>
        <Button label="About us" onClick={()=>navigate("/About")} variant="primary"/>
        <Button label="24/7 Emergency Roadside" onClick={()=>navigate("/Roadside")} variant="primary"/>
        <Button label="Contact Us" onClick={()=>navigate("/Contacts")} variant="primary"/>
    </div>



    </div>
    )}