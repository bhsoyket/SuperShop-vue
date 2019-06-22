const express = require("express");
const cors = require("cors");
const data = require("./data");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/item/:id", (req, res) => {
  const item = data.filter(i => {
    return i.id == req.params.id;
  });
  res.send(item);
});

app.get("/search/:keyword", (req, res) => {
  const search = data.filter(item => {
    return (
      item.title.toLowerCase().indexOf(req.params.keyword.toLowerCase()) !== -1
    );
  });
  res.send(search);
});

app.listen(3000, () => {
  console.log("server running on prt 3000...");
});
