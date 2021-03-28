import React from "react";

const Ticket = ({ data }) => {
  return (
    <>
      {data.map((ticket) => (
        <div className="ticket">
          <h3>{ticket.title}</h3>
          <p className="innerText">{ticket.content}</p>
          <p>{`${ticket.userEmail} | ${new Date(
            ticket.creationTime,
          ).toLocaleString()}`}</p>
        </div>
      ))}
    </>
  );
};

export default Ticket;
