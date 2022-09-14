import React from "react";

function Person({user}) {
  return (
    <div className="card">
      <img src="../user.png" />
      <h2>{user.name}</h2>
      <h3>{user.username}</h3>
      <h3>{user.email}</h3>
      <h3>{user.address.street}</h3>
    </div>
  );
}

export default Person;
