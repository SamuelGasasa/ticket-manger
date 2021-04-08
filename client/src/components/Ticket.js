import React from "react";
import { useState, useEffect } from "react";
import "../styles/tickets.css";

const Ticket = ({ data, show, counter, setCounter }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setHide(false);
  }, [show]);
  return (
    <>
      {hide ? null : (
        <div className="ticket">
          <button
            className="hideTicketButton"
            onClick={() => {
              setCounter(counter + 1);
              setHide(true);
            }}
          >
            hide
          </button>
          <h3>{data.title}</h3>
          <p>{data.content}</p>
          <p>{`${data.userEmail} | ${new Date(
            data.creationTime,
          ).toLocaleString()}`}</p>
          {data.labels?.map((label) => {
            return <span className="label">{label}</span>;
          })}
        </div>
      )}
    </>
  );
};

export default Ticket;
