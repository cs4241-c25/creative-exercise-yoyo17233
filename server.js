const path = require("path");
const express = require('express');

const app = express();
const dir  = "public/"
const port = process.env.PORT || 3000

app.use(express.static(dir));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});