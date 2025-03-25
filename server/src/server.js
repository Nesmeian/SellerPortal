import express from "express";
import cors from "cors";
import { getTranslation } from "./translator/index.js";

const app = express();
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.get("/api", (req, res) => {
  res.json({ JACK: ["jack"] });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
console.log(await getTranslation());
