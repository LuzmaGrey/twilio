import express from "express";
import {
  productosDao as productosApi,
  carritosDao as carritosApi,
} from "../daos/index.js";
import Usuarios from "../daos/usuarios/UsuariosDao.js";

const { Router } = express;

const router = new Router();

function auth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
}

router.get("/", auth, async (req, res) => {
  let carrito = await carritosApi.mostrar({
    usuario: req.user.username,
    finalizado: false,
  });
  let param;
  if (carrito) {
    param = "api/carritos/" + carrito.id + "/productos";
  } else {
    param = "#";
  }
  res.render("index", {
    data: await productosApi.mostrarTodos(),
    nroC: param,
    user: await Usuarios.mostrar({ username: req.user.username }),
  });
});

export default router;
