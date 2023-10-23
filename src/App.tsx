import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
// import { Users } from "./Components/UsersPage/UsersPage";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <AppRoutes />
        </div>
      </Router>
    </>
  );
}

export default App;
