const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io");
const MongoClient = require("mongoose");

const ambulanceRouter = require("./routes/ambulanceRouter");
const driverRouter = require("./routes/driverRouter");
const userRouter = require("./routes/usersRouter");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(bodyParser.json());
app.use(cors());

let ambulanceLocations = [];

io.on("connection", (socket) => {
  socket.on("als", () => {
    socket.join("als");
    socket.emit("msg", "Room Joined - ALS");
  });
  socket.on("bls", () => {
    socket.join("bls");
    socket.emit("msg", "Room Joined - BLS");
  });
  socket.on("non-emergency", () => {
    socket.join("non-emergency");
    socket.emit("msg", "Room Joined - Non Emergency");
  });

  socket.on("save_ambulance_position", (data) => {
    const position = {
      id: socket.id,
      lat: data.lat,
      lng: data.lng,
    };
    ambulanceLocations.push(position);
  });
  socket.on("get_ambulance_positions_request", () => {
    socket.emit("get_ambulance_positions_response", ambulanceLocations);
  });

  socket.on("ambulance_request", (data) => {
    socket.broadcast.to(data.ambulanceType).emit("driver_request", data);
  });
  socket.on("driver_accept", (data) => {
    socket.to(data.id).emit("accept_request", data);
  });

  socket.on("disconnecting", () => {
    const rooms = Object.keys(socket.rooms).length;
    if (rooms === 2) {
      ambulanceLocations = ambulanceLocations.filter(
        (item) => item.id !== socket.id
      );
    }
  });
});

MongoClient.connect("mongodb://localhost:27017/artemis", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.error("Error while connecting to database:", err));

app.use("/api/ambulances", ambulanceRouter);
app.use("/api/driver", driverRouter);
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
