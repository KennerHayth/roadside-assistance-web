import Banner from "../components/Banner";
import ReviewSection from "../components/ReviewSection"

export default function Home(){
  return (
      <div style={{ margin: 0, padding: 0, background: "#1b1815" }}>
        <Banner />

        <div style={{ position: "relative", marginBottom: "60px" }}>
          <img
            src="/HH_Truck.png"
            style={{
              width: "100%",
              height: "70vh",
              objectFit: "cover",
              objectPosition: "50% 30%",
              display: "block",
            }}
          />

          <div style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate(-50%, 50%)",
            backgroundColor: "#db8606",
            color: "#1a1a1a",
            width: "min(380px, 90%)",
            padding: "20px 28px",
            textAlign: "center",
            boxShadow: "0 6px 30px rgba(0,0,0,0.35)",
            borderRadius: "4px",
            zIndex: 10,
          }}>
            <div style={{ fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
              Contact Our 24/7 Dispatch
            </div>
            <div style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "0.02em" }}>
              (850) 666-0905
            </div>
          </div>
        </div>

        <ReviewSection />
      </div>
    )
}

