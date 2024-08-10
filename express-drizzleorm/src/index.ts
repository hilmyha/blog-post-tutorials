import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import mahasiswaRoute from "./routes/mahasiswa.route";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// routes
app.use("/api", mahasiswaRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
