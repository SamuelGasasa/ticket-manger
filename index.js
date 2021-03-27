require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const e = require("express");
// const { response } = require("./app");
const env = process.env.NODE_ENV || "production";
const MONGO_URI =
  env === "test" ? process.env.TEST_MONGO_URI : process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`connected to MongoDB - ${env}`);
    app.listen(PORT, () =>
      console.log(`app listening at http://localhost:${PORT}`),
    );
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const Schema = mongoose.Schema;

const tickets = mongoose.model(
  "tickets",
  new Schema({
    title: String,
    content: String,
    userEmail: String,
    done: Boolean,
    creationTime: Number,
    labels: [String],
  }),
);

// const DB = mongoose.connection;
// const ticketsd = DB.collection("tickets");
app.get("/api/tickets", async (req, res) => {
  // try {
  //   const all = await ticketsd.find({}).toArray();
  //   console.log(all);
  //   const { searchText } = req.query;
  //   if (searchText) {
  //     console.log(searchText);
  //     const searchedTickets = all.filter((ticket) => {
  //       return ticket.title.includes(searchText);
  //     });
  //     res.send(searchedTickets);
  //     return;
  //   }

  //   res.status(200).send(all);
  // } catch (error) {
  //   res.send({ error: e.message });
  // }
  tickets.find({}, (err, collection) => {
    // console.log(req.query.id);
    const { searchText } = req.query;
    const check = new RegExp(searchText, "g");
    console.log(searchText);
    if (searchText) {
      const newArr = collection.filter((ticket) => {
        // console.log(ticket.title.inc);
        return ticket.title.includes(searchText);
      });
      res.status(200).send(newArr);
      return;
    }

    res.status(200).send(collection);
  });
});

app.patch("/api/tickets/:ticketId/done", async (req, res) => {
  const { ticketId } = req.params;
  // const first = await ticketsd.find({ _id: ticketId });
  // console.log(first);
  tickets.findById(ticketId).then((response) => {
    response.done = true;
    response.save();
    console.log(response);
  });

  // console.log()
  res.send({ update: true });
});

app.patch("/api/tickets/:ticketId/undone", (req, res) => {
  const { ticketId } = req.params;
  tickets.findById(ticketId).then((response) => {
    response.done = false;
    response.save();
    console.log(response);
  });

  // console.log()
  res.send({ update: true });
});
