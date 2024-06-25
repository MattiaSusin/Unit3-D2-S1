import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import MyAlert from "./components/MyAlert";


function App() {
  return (
    <div className="App">
      <TopBar/>
      <MyAlert/>
      <MyFooter/>
      
    </div>
  );
}

export default App;
