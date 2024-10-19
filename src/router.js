import express from "express";

import {
   listarEstudiantes,
 } from "./estudianteController.js";

const router = express.Router();

router.get("/Crud-Completo-con-NodeJS-Express-y-MySQL", async (req, res) => {
  try {
    const estudiantes = await listarEstudiantes();
    res.render("pages/estudiantes", { estudiantes });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

router.get('/acerca', (req, res) => {
  res.render('pages/acerca');
});


router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});

router.post('/enviar-mensaje', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  // Aquí puedes guardar el mensaje en la base de datos o enviar un correo
  console.log(`Mensaje recibido de ${nombre} (${email}): ${mensaje}`);
  res.send('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
});

 

export default router;
