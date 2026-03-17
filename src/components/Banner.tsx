
import Button from "./Button"

export default function Banner(){
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
        // padding: "30px 40px",
        fontFamily: "'Cinzel', serif",display: "flex",height:"7vh"
        
    }}> 
    <div style = {{display: "flex"}}>
    <img src="/LOGO_transparent.PNG" alt= "Highway Heros Logo" style={{width: "150px", left: "40px", height:"auto",top: "50%",transform: "translateY(-50%)", position: "absolute",}}/>
      </div> 
      <div style = {{flex: 1, display:"flex", gap: "20px", alignItems:"center",justifyContent: "center",}}>
        <Button label="Home" onClick={()=>{}} variant="primary"/>
        <Button label="About us" onClick={()=>{}} variant="primary"/>
        <Button label="24/7 Emergency Roadside" onClick={()=>{}} variant="primary"/>
        <Button label="Contact" onClick={()=>{}} variant="primary"/>
        <Button label="Pricing" onClick={()=>{}} variant="primary"/>
    </div>



    </div>
    )}


