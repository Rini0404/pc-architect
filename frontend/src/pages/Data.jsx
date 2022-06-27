import React from "react";
import axios from "axios";

function Home() {
  // to pull our api data
  const [gpu, setGpu] = React.useState([]);
  React.useEffect(() => {
    axios.get("/api/gpus").then((res) => {
      setGpu(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    // display in a table
    <div>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Type</th>
            <th>Model</th>
            <th>Rank</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {gpu.map((gpu) => (
            <tr key={gpu.id}>
              <td>{gpu.Brand}</td>
              <td>{gpu.Type}</td>
              <td>{gpu.Model}</td>
              <td>{gpu.Rank}</td>
              <a href={gpu.URL}>{gpu.URL} </a>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
