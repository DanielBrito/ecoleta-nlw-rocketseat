import express from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json(["Daniel", "Caroline", "Francisca"]);
});

app.listen(3335);
