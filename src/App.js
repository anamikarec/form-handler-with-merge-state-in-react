import "./styles.css";
import Form from "./form";
import { useState } from "react";
export default function App() {
  const [userData, setUserData] = useState([]);
  console.log(userData);
  return (
    <div className="App">
      <h1>Taking Form as Input</h1>
      <Form setUserData={setUserData} userData={userData} />
    </div>
  );
}
