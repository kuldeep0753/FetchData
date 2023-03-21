import "./App.css";
import { useEffect, useState } from "react";
import ShowData from "./components/ShowData";

function App() {
  const [user, setUser] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const url = `https://give-me-users-forever.vercel.app/api/users/${count}/next`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setUser(json.users);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [count]);

  function handleNextUsers() {
    setCount((count) => count + 10);
  }
  function handlePreviousUsers() {
    setCount((count) => count - 10);
  }

  return (
    <div className="App">
      <button className="fetch-data" onClick={handlePreviousUsers}>
        Previous Data
      </button>
      <button className="fetch-data" onClick={handleNextUsers}>
        Next Data
      </button>
      <div>
        <table className="headBackground">
          <thead>
            <tr>
              <th>ID</th>
              <th>Job Title</th>
              <th>Email Address</th>
            </tr>
          </thead>
        </table>

        {user.map((userData, key) => {
          if (userData.ID) {
            return (
              <ShowData
                id={userData.ID}
                jobTitle={userData.JobTitle}
                emailAddress={userData.EmailAddress}
                key={key}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
