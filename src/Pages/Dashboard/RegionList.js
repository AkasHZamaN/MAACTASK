import React, { useEffect, useState } from "react";

const RegionList = () => {
  const [region, setRegion] = useState([]);

  useEffect(() => {
    fetch("https://staging-api.erpxbd.com/api/v1/region/20/1", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRegion(data.region);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Region Name</th>
            </tr>
          </thead>
          <tbody>
            {region.map((r, index) => (
              <tr key={r._id}>
              <th>{index + 1}</th>
              <td>{r.name}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegionList;
