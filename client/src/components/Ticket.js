import React from "react";
import { useState, useEffect } from "react";

const Ticket = ({ data, show }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setHide(false);
  }, [show]);
  return (
    <>
      {hide ? null : (
        <div className="ticket">
          <button
            id="hideTicketButton"
            onClick={() => {
              setHide(true);
            }}
          >
            hide
          </button>
          <h3>{data.title}</h3>
          <p className="innerText">{data.content}</p>
          <p>{`${data.userEmail} | ${new Date(
            data.creationTime,
          ).toLocaleString()}`}</p>
        </div>
      )}
    </>
  );
};

export default Ticket;
