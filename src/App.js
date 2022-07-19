import React, { useState } from "react";
import UsersList from "./Components/UsersList";
import Input from "./Components/Input";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <Input onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
