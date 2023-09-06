import express from "express";
import morgan from "morgan";

const App = express();

App.use(morgan("dev"));

export default App;