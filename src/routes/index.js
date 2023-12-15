import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("index", { title: "PORTFOLIO" });
});

router.get("/museo", (req, res) => {
    res.render("museo", { title: "Museo Virtual" });
});

router.get("/hugo", (req, res) => {
    res.render("hugo", { title: "Hugo Framework" });
});

router.get("/arquitectura", (req, res) => {
    res.render("arquitectura", { title: "Arquitectura Web" });
});

router.get("/servidores", (req, res) => {
    res.render("servidores", { title: "Servidores Web" });
});

router.get("/backend", (req, res) => {
    res.render("backend", { title: "Desarrollo Backend" });
});

router.get("/general", (req, res) => {
    res.render("general", { title: "En General" });
});

export default router;