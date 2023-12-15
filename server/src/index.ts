import express from "express";

const app = express();
const port = 3001;

// app.get("/", (req, res) => {
//   res.send("Testing ribbon");
// });
app.get("/api/test", (req, res) => {
  res.json({ message: "Hi Ribbon client" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
