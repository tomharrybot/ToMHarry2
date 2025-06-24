const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Manual route imports
app.use("/api/tikdl", require("./api/tikdl"));
app.use("/api/fbdl", require("./api/fbdl"));
app.use("/api/canvas", require("./api/canvas"));

// Homepage - serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
