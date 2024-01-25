
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './checkout'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
                <h1>Checkout page is rendering</h1>
              </>
            }
          />
        </Routes>

      </div>

    </Router>






  );
}

export default App;
