const routes = require('express').Router();

const {
    getAllHalls,
  getHallById,
  createHall,
  updateHall,
  deleteHall,

}= require("../controller/controller-Hall");

routes.post("/", createHall)
routes.get("/:id", getHallById)
routes.get("/", getAllHalls)
routes.get("/:id", updateHall)

module.exports = routes;