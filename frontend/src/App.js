import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
//import { useState } from "react";
import Home from "./screens/LoginScreen/Home";

function App() {
  //const [search, setSearch] = useState("");

  return (
    <Router>
      {/* <Header setSearch={(s) => setSearch(s)} /> for log out purpose */}
      <div className="App">
        <Route path="/" component={LoginScreen}exact />
        
        <Route
          path="/home"
          component={Home
          }
        />
      </div>
    </Router>
  );
}

export default App;
