// import logo from './logo.svg';
import Chat from './Chat'
import './App.css';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { useState } from 'react';
import Login from "./Login"
import { useStateValue } from './StateProvider';
import Place from "./Place"

function App() {
  // const [user,setUser] = useState(null)
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
       <Login/>
      ):(
        <div className="app__body">
      
      <Router>
      <Sidebar/>
        <Routes>
        {/* <Sidebar/> */}
          <Route path ="/" element={[<Place/>]} />
            

          <Route path ="/rooms/:roomId" element={[<Chat/>]} />
          
       
        

        </Routes>
        </Router>
      </div>
      )}
      
    </div>
  );
}

export default App;
