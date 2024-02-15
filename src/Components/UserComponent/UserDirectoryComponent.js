import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserDirectoryComponent() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {setUser(data)})
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h2 className="page-name">Directory</h2>
      {user.length > 0 ? user?.map((user) => (<UserCard key={user.id} userData={user} />)
      ) : "Loading..."}
    </div>
  );
}

export default UserDirectoryComponent;
