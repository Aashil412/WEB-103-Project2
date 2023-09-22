import express from "express";
import router from "./routes/creators.js";
const app = express();

app.use("/public", express.static("./public"));
app.use("/scripts", express.static("./public/scripts"));

app.get("/", (req, res) => {
  res
    .status(200)
    .send('<h1 style="text-align: center; margin-top: 50px;"> HW 1</h1>');
});
app.use("/creators", router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
