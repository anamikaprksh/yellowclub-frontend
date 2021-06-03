//import logo from './logo.svg';
import './App.css';
import { Router } from "@reach/router";
import Partners from './components/Partners'

function App() {
  return (
    <div className="App">
     <Router>
      <Part path="/"></Part>
     </Router>

    </div>
  );
}
function Part() {
 return <Partners></Partners>
}
export default App;
