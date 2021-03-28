import React from "react";

const Ticket = ({ data }) => {
  return (
    <>
      {data.map((ticket) => (
        <div className="ticket">
          <div>{ticket.title}</div>
          <p>{ticket.content}</p>
          <p>{`${ticket.userEmail} | ${new Date(
            ticket.creationTime,
          ).toLocaleString()}`}</p>
        </div>
      ))}
    </>
  );
};

export default Ticket;
