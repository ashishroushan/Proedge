const express = require("express");
const cors = require("cors");
const app = express();
const fetch = require("node-fetch");


app.use(express.json());
app.use(cors());


app.post("/test", async (req, res) => {
  const { rollNumber } = req.body;
  const data = [];
  console.log(rollNumber);

  for (const item of rollNumber) {
    const res = await fetch(
      ` http://proedge.me/test.php?rollnumber=${item}`
    );
    const text = await res.text();

    data.push(text);
    console.log(text);
  }

  res.json(data);
});


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on ${port}`));
