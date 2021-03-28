import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Ticket from "./components/Ticket";
import { useState, useEffect } from "react";

function App() {
  const [tickets, setTickets] = useState([]);
  // const fetch = async () => {

  // };

  useEffect(() => {
    axios.get("api/tickets").then((response) => {
      setTickets(response.data);
    });
    // setTickets(data);
  }, []);

  // fetch();
  return (
    <>
      <h1>Ticket Manager</h1>
      <Ticket data={tickets} />
    </>
  );
}

export default App;
