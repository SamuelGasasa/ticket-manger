import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Ticket from "./components/Ticket";
import { useState, useEffect } from "react";

function App() {
  const [tickets, setTickets] = useState([]);
  const fetch = async () => {
    const { data } = await axios.get("api/tickets");
    setTickets(data);
  };

  fetch();
  return (
    <>
      <Ticket data={tickets} />
    </>
  );
}

export default App;
