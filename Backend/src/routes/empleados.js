import express from "express";
import empleadosController from "../controllers/empleadosController.js";

const router = express.Router();

router
.route("/")
.get(empleadosController.getEmpleados)
.post(empleadosController.createEmpleados);

router
.route("/:id")
.get(empleadosController.getEmpleado)
.put(empleadosController.updateEmpleados)
.delete(empleadosController.deleteEmpleados)

export default router;