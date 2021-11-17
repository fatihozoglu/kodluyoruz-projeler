const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const blog = { id: 1, title: "Blog title", description: "Blog description" };
  res.send(`<h1>${JSON.stringify(blog)}</h1>`);
});

app.listen(8080, () => {
  console.log("Sunucu 8080 Portunda başlatıldı.");
});
