import './App.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/auth/Login'

function App() {
  return (
    <div  style={{paddingTop: 25}}> 
      
<Router>
  <Route exact path="/login">
    <Login></Login>
  </Route>
  <Route exact path="/">

  <Main 
    // username="Construtor"
  //  username="Fiscal"
  // username="Financeiro"
  // username="Outro"
  />
  </Route>
  </Router>
    </div>
    
    
  );
}

export default App;
