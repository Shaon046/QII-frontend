import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token"); // Retrieve token from cookie
        if (!token) {
          // Handle case where token is not present (e.g., redirect to login)
          console.log("Token not found in cookie");
          return;
        }

        const response = await axios.get("http://localhost:2000/allusers", {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token in the Authorization header
          },
          withCredentials: true, // Send cookies with the request
        });

        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
