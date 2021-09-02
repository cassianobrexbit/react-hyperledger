import './App.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div> 
      
<Router>
  <Main 
    username="Construtor"
  //  username="Fiscal"
  // username="Financeiro"
  />
  </Router>
    </div>
    
    
  );
}

export default App;
