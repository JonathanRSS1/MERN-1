import express from "express";
import clientesController from "../controllers/clientesController.js";

const router = express.Router();

router
.route("/")
.get(clientesController.getClientes)
.post(clientesController.createClientes);

router
.route("/:id")
.get(clientesController.getCliente)
.put(clientesController.updateClientes)
.delete(clientesController.deleteClientes);

export default router;