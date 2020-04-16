const express = require("express");
const users = require("./Users");

const app = express();

// Get users
app.get("/api/users", (req, res) => res.json(users));

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
