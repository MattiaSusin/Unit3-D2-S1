import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";


function App() {
  return (
    <div className="App">
      <TopBar/>
      <MyFooter className=""/>
      
    </div>
  );
}

export default App;
