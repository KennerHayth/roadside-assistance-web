import Banner from "../components/Banner";

export default function Contacts(){
    return(
    <div style= {{minHeight: "100vh", width: "100%", background: "#1b1815"}}>

        <div><Banner/></div>

        <div style={{minHeight:"100vh",background:"#1b1815", display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center", paddingTop:"120px", fontFamily:"'Cinzel', serif"}}>
            <h1 style ={{color:"white",fontSize:"42px", fontWeight:"900", letterSpacing: "2px"}}>Contact Us</h1>
            <p style= {{color:"#71797E", fontSize:"14px", letterSpacing:"2px"}}>Available 24/7 — We come to you!</p>
            <div style={{display:"flex", gap:"24px", width:"100%", maxWidth: "900px"}}>
                <div style ={{flex:1, background:"#2a2a2a",border: "1px solid #71797E", borderRadius:"12px", padding: "36px 24px", textAlign:"center"}}> 
                    <p style = {{color:"#71797E", fontSize:"11px", letterSpacing:"3px"}}>CALL OR TEXT</p>
                    <p style = {{color:"#db8606", fontSize:"22px"}}>(850) 666-0905</p>
                </div>
                <div style ={{flex:1, background:"#2a2a2a",border: "1px solid #71797E", borderRadius:"12px", padding: "36px 24px", textAlign:"center"}}> 
                    <p style = {{color:"#71797E", fontSize:"11px", letterSpacing:"3px"}}>DON'T WANT TO CALL? SEND AN EMAIL</p>
                    <p style = {{color:"#db8606", fontSize:"22px"}}>PLACEHOLDER@OUTLOOK.com</p>
                </div>
                <div style ={{flex:1, background:"#2a2a2a",border: "1px solid #71797E", borderRadius:"12px", padding: "36px 24px", textAlign:"center"}}> 
                    <p style = {{color:"#71797E", fontSize:"11px", letterSpacing:"3px"}}>FOLLOW OUR SOCIALS</p>
                    <a href="https://www.facebook.com/people/Highway-Heros-Inc/61588231935890/#"><img src="/Facebook.jpg" style = {{maxWidth:"5vh", paddingRight:"1vh"}}/></a>
                    <a href="https://www.tiktok.com/@highway.heros"><img src="/TikTok.png"style = {{maxWidth:"5vh"}}/></a>
                </div>
            </div>
        </div>
    </div>
    )
}