import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Ticket from "./components/Ticket";
import { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";

function App() {
  const [tickets, setTickets] = useState([]);
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(0);

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
          setCounter(0);
          setShow(!show);
        }}
      >
        show all
      </button>
      <span id="hideTicketsCounter">{counter}</span>
      {tickets.map((ticket) => {
        return (
          <Ticket
            data={ticket}
            show={show}
            counter={counter}
            setCounter={setCounter}
          />
        );
      })}
    </>
  );
}

export default App;
