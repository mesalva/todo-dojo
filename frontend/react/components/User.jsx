import React from 'react'

const User = ({ name, job }) => (
  <div className="user">
    <h2>{name}</h2>
    <div className="position">Cargo: {job}</div>
    <style jsx>{`

      .user{
        display: inline-block;
        border: 2px dashed;
        padding: 10px;
      }
      .user h2{
        color: green;
        margin-top: 0;
      }
      .user div{
      color: magenta;
      }`}

    </style>
  </div>
)

export default User
