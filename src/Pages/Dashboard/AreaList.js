import React, { useEffect, useState } from "react";

const AreaList = () => {
  const [area, setArea] = useState([]);

  useEffect(() => {
    fetch("https://staging-api.erpxbd.com/api/v1/area/All/200/1", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArea(data.area);
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
              <th>Area Name</th>
            </tr>
          </thead>
          <tbody>
            {area.map((r, index) => (
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

export default AreaList;
