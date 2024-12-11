const routes = require('express').Router();

const {
    getAllTikets,
  getTiketById,
  createTiket,
  updateTiket,
  deleteTiket,

}= require("../controller/controller-ticket");

routes.post("/", createTiket);
routes.get("/:id", getTiketById)
routes.get("/", getAllTikets)

module.exports = routes;