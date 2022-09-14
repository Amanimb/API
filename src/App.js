import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Person from "./component/Person";

function App() {
  const [person, setperson] = useState([]);
  useEffect(() => { axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => setperson(res.data))
     .catch ((error)=>console.log(error)) 
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="list">
      {person.map((el)=>(<Person user={el}/>))}
      </div>
      
    </div>
  );
}

export default App;
