//import logo from './logo.svg';
import './App.css';
import { Router } from "@reach/router";
import Partners from './components/Partners/Partners'
import MiniDrawer from "./components/Appbar/Appbar"
function App() {
  return (
    <div className="App">
       <Header path="/header"></Header>
     <Router>
     <Header path="/header"></Header>
      <Part path="/Partners"></Part>
     </Router>

    </div>
  );
}
function Part() {
 return <Partners></Partners>
}
function Header(){
  return <MiniDrawer></MiniDrawer>
}
export default App;
