import { useEffect, useState } from "react";
// import "./index.css";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((info) => setData(info));
  }, []);
  console.log(data);
  return (
    <div className="App">
      {data.map((el) => {
        return (
          <>
            <h1>{el.name}</h1>
            <h2>{el.email}</h2>
          </>
        );
      })}
    </div>
  );
}
