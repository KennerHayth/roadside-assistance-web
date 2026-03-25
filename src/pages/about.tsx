import Banner from "../components/Banner";

export default function About() {
  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", minWidth: "100%" }}>
      
      <Banner />

      <div style={{ padding: "40px" }}>

        <div>
          {/* highway heros above about us with a picture on the right */}
          <h1>Highway Heros</h1>
          <p>About Us</p>
        </div>

        <div>
          <h1>Highway Heros Values:</h1>
          <p>
            Repairs Done Right the first time, Back on the Road Fast,
            Fair Prices (no surprises), Clear Communication
          </p>
        </div>

        <div>
          <h1>Mission Statement</h1>
          <p>
            mission statement placeholder mission statement placeholder
            mission statement placeholder mission statement placeholder
            mission statement placeholder mission statement placeholder
            mission statement placeholder
          </p>
        </div>

        <div>
          <h1>Guaranteed 24/7 Service</h1>
          <p>
            Highway Heros is dedicated to providing quality emergency roadside assistance 24/7.
            We are just a call away. Give our dispatch a call, we will be there.
          </p>
        </div>

      </div>
    </div>
  );
}