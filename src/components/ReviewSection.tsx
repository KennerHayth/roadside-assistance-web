export default function reviews(){

    return(
        <div style = {{backgroundColor: "#1b1815", padding: "60px 40px", minHeight:"600vh"}}>
            
            <div style={{display:"grid", gap:"60px",maxWidth:"1100px", alignItems:"center",gridTemplateColumns: "1fr 1px 1fr",margin: "0 auto"}}>

                    <div style = {{display: "flex", flexDirection:"column", gap: "16px",justifyContent:"center",alignItems: "center"}}>
                    <h2 style={{fontSize:"35px",fontFamily: "'Cinzel', serif"}}>Meet YOUR Heros</h2>
                    <p style={{}}>Highway Heros specializes in keeping your truck moving, anywhere, anytime. We strive to deliver the highest quality services to our customers and the best breakdown experiences 24/7</p>
                    </div>

                    <div style = {{height:"48vh",width:"1px",alignSelf:"stretch",background: "linear-gradient(to bottom, transparent, #db8606 30%, #db8606 70%, transparent)"}} />

                    <div style={{display:"flex", flexDirection:"column",alignItems:"center",gap:"16px",justifyContent:"center"}}>
                        <h3 style={{fontSize:"35px", fontFamily: "'Cinzel', serif"}}>Customer Reviews</h3>
                        <a href='https://share.google/Li1l5ZnSjUb0RNbma' style={{fontSize:"20px",fontFamily: "'Cinzel', serif", textAlign:"center"}}>Check our customer reviews or leave a review for future customers!</a>
                    </div>

            </div>
        </div>


    )
}