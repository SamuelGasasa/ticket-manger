import React from "react";

const Ticket = ({ data }) => {
  return (
    <div>
      <h1>Ticket Manager</h1>
      {data.map((ticket) => (
        <div>
          <div>{ticket.title}</div>
          <p>{ticket.content}</p>
          <p>{`${ticket.userEmail} | ${ticket.creationTime}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Ticket;
