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
        padding: "30px 40px",
        fontFamily: "'Cinzel', serif",
        
    }}> 
    <div style = {{flex: 1}}>
    <img src="/LOGO_transparent.PNG" alt= "Highway Heros Logo" style={{width: "150px", left: "40px", height:"auto",position: "absolute"}}/>
      </div> 
      <div style = {{flex: 1, display:"flex", justifyContent: "center", gap:"24px"}}>
        <Button label="Home" onClick={()=>{}} variant="primary"/>
        <Button label="About us" onClick={()=>{}} variant="primary"/>
        <Button label="24/7 Emergency Roadside" onClick={()=>{}} variant="primary"/>
        <Button label="Contact" onClick={()=>{}} variant="primary"/>
        <Button label="Pricing" onClick={()=>{}} variant="primary"/>
    </div>



    </div>
    )}