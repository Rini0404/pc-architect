import "./App.css";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (

    <Router>
      <>
        <div className="App">
          <Nav />
          <Pages />
          <Footer />
        </div>
        <ToastContainer />
      </>
    </Router>

  );
}

export default App;
