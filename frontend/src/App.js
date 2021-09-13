
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen  from './components/screens/HomeScreen';
import ProductScreen from './components/screens/ProductScreen';


function App() {
  return (
    <Router>
         <Header/>
         <main>
           <div className = "container">
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} exact/>
             </div>
           
          </main>
        <Footer/>
    </Router>
  );
}

export default App;
