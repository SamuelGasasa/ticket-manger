import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Ticket from "./components/Ticket";
import { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";

function App() {
  const [tickets, setTickets] = useState([]);
  const [show, setShow] = useState(false);

  // const fetch = async () => {

  // };

  useEffect(() => {
    axios.get("/api/tickets").then((response) => {
      setTickets(response.data);
    });
    // setTickets(data);
  }, []);

  const searchTickets = (searchInput) => {
    axios.get(`/api/tickets?searchText=${searchInput}`).then((response) => {
      setTickets(response.data);
    });
  };

  // fetch();
  return (
    <>
      <h1>Ticket Manager</h1>
      <SearchInput search={searchTickets} />
      <button
        id="restoreHideTickets"
        onClick={() => {
          setShow(!show);
        }}
      >
        show all
      </button>
      {tickets.map((ticket) => {
        return <Ticket data={ticket} show={show} />;
      })}
    </>
  );
}

export default App;
