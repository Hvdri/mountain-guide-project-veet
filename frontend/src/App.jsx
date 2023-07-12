import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
// import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Destination from "./routes/Destination";

function App() {
  return (
    <div className="App">

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination/:destinationId" element={<Destination />} component={Destination}/>
        {/* <Route path="/service" element={<Service />} /> */}
      </Routes>

    </div>
  );
}

export default App;