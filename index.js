require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
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
    lables: [String],
  }),
);
const db = mongoose.connection;

app.get("/api/tickets", (req, res) => {
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
      res.send(newArr);
      return;
    }

    res.send(collection);
  });
});
