import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Newsboard from "./Components/Newsborad";

const App =()=>{
  const [category,setCategory] = useState("");
  return(
    <div>
    <Navbar setCategory={setCategory}/>
    <Newsboard category={category}/>
    </div>
  )
}

export default App;