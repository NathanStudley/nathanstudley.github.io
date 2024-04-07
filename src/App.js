import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <body className="h-screen flex flex-col">
      <Router>
        <Header />
        <Footer />
      </Router>
    </body>
  );
}

export default App;
