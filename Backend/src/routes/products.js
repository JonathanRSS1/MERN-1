import express from "express";

// Router() nos ayuda a colocar los metodos que tendra mi ruta
const router = express.Router

router.route("/")
.get()
.post()
.put()
.delete();

