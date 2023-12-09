import React, { useState, useEffect } from "react";
import axios from "axios";

const UserData = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUserData(response.data); // Assuming the response contains an array of user data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Information</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <p>
            <strong>Name:</strong>
          </p>
          <div>
            <p>{user.name}</p>
          </div>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>Zipcode: {user.address.zipcode}</p>
          <hr /> {/* Optional: Adds a horizontal line between users */}
        </div>
      ))}
    </div>
  );
};

export default UserData;
