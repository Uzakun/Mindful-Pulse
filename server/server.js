require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth_router");
const conncectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error_middleware");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service_router")

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);


app.use(errorMiddleware);

const PORT = 5000;

conncectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
})