import React from "react"
import Button from "./components/Button"

const App:React.FC = () => { 
    const handlesave = (): void => {
      alert("save simulated");
    };
  return(
    <div>
      <h1>Main Page</h1>
      <Button desc = 'Save' onClick={handlesave} variant="primary"/>
    </div>
  );

};
export default App