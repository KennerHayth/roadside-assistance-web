
import Button from "./Button"


export default function Banner(){
    return(
    <div style={{
        position: "fixed",
        top:"0",
        left: "0",
        width: "100%",
        zIndex: 1000,
        backgroundImage: "linear-gradient(to bottom, #1b1815, #a85823 80%)",
        borderBottom: "solid",
        borderBottomColor: "black",
        padding: "25px",
        paddingRight: "30px",
        fontFamily: "'Bebas Neue', sans-serif",
        textAlign: "center",
    }}> 

    <Button label="Home" onClick={()=>{}} variant="primary"/>
    <Button label="About us" onClick={()=>{}} variant="primary"/>
    <Button label="24/7 Emergency Roadside" onClick={()=>{}} variant="primary"/>
    <Button label="Contact" onClick={()=>{}} variant="primary"/>
    <Button label="Pricing" onClick={()=>{}} variant="primary"/>


    </div>
    )}


